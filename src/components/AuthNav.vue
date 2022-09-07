<template>
  <div class="authNav">
    <div
      v-if="loggedInUser"
      class="loggedIn"
    >
      <v-menu
        open-on-hover
        bottom
        offset-y
        rounded="lg"
      >
        <template v-slot:activator="{ on }">

          <v-img
            class="userIcon"
            width="40px"
            :src="`https://avatars.dicebear.com/api/croodles-neutral/${loggedInUser.email}.svg`"
            v-on="on"
          />
        </template>

        <div class="userMenu">
          <p class="userInfo">{{ loggedInUser.email }}</p>
          <v-divider />
          <p
            class="logoutBtn"
            @click="logout()"
          >Log out</p>
        </div>
      </v-menu>

    </div>
    <div
      v-else
      class="loggedOut"
    >
      <div
        class="loggedOut__actions loggedOut__login"
        @click="loginDialogSelected = true; dialog = true"
      >
        Log in
      </div>
      <div
        class="loggedOut__actions loggedOut__signup"
        @click="loginDialogSelected = false; dialog = true"
      >
        Sign up
      </div>
    </div>

    <v-dialog
      v-model="dialog"
      width="600px"
      persistent
      transition="dialog-top-transition"
    >

      <v-card
        rounded="lg"
        color="cRed"
        class="white--text"
      >
        <v-card-title class="pa-4">
          {{ loginDialogSelected ? 'Log in': 'Sign up'}}
        </v-card-title>
        <v-card-text class="cRed lighten-5 pa-4">
          <div class="field">
            <p>Email</p>
            <v-text-field
              v-model="email"
              placeholder="email"
              outlined
              hide-details
              required
              class="white my-3"
            />
          </div>
          <div class="field">
            <p>Password</p>
            <v-text-field
              v-model="password"
              placeholder="password"
              outlined
              password
              class="white my-3"
              hide-details
              required
              :type="showPassword ? 'text' : 'password'"
              @click:append="showPassword = !showPassword"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            />
          </div>
          <p class="ma-0">
            {{ loginDialogSelected ? 'Not a member?': 'Already a member?'}}

            <span
              class="toggleLoginSignInText"
              @click="loginDialogSelected = !loginDialogSelected; errorMessage = ''"
            >
              {{ loginDialogSelected ? 'Sign Up': 'Log in'}}
            </span>
          </p>
        </v-card-text>
        <v-card-actions>
          <span class="white--text">{{ errorMessage }}</span>
          <v-spacer />
          <v-btn
            class="white--text pa-4"
            plain
            @click="close()"
          >
            Cancel
          </v-btn>
          <v-btn
            class="white--text pa-4"
            outlined
            :disabled="!(email && password)"
            @click="actionBtn()"
          >
            Sign In
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import { auth } from '@/helpers/firebaseInit.js'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

export default {
  components: {},
  props: {
  },
  data: () => {
    return {
      email: '',
      password: '',
      dialog: false,
      loginDialogSelected: true,
      showPassword: false,
      errorMessage: '',
    }
  },
  mounted () {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.setLoggedInUser(user)
      }
      else {
        this.setLoggedInUser(undefined)
      }
    })
  },
  watch: {},
  computed: {
    ...mapGetters(['loggedInUser']),
  },
  methods: {
    ...mapActions(['setLoggedInUser']),
    close () {
      this.email = ''
      this.password = ''
      this.dialog = false
      this.errorMessage = ''
    },
    actionBtn () {
      if (this.loginDialogSelected) this.login(this.email, this.password)
      else this.signup(this.email, this.password)
    },
    signup (email, password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          this.close()
        })
        .catch((error) => {
          this.errorMessage = error.message
        });
    },
    login (email, password) {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          this.close()
        })
        .catch((error) => {
          this.errorMessage = error.message
        });
    },
    logout () {
      signOut(auth).then(() => {
        console.log('signed out')
      }).catch((error) => {
        console.log(error)
      });
    },
  }
}
</script>

<style lang="scss" scoped>
.authNav {
  .userIcon {
    background-color: var(--v-cBlue-lighten5);
    border-radius: 1em;
  }

  .loggedOut {
    display: flex;
    font-weight: bold;
    text-align: center;
    justify-content: center;
    align-items: center;

    .loggedOut__actions {
      padding: 0.5em;
      margin-left: 1em;
      cursor: pointer;
    }

    .loggedOut__actions:hover {
      color: var(--v-cYellow-base);
      border-color: var(--v-cYellow-base);
    }

    .loggedOut__signup {
      border: 1px solid white;
      border-radius: 0.5em;
    }
  }
}

.v-card__title {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;

  font-size: 35px !important;
  font-family: pricedown;
}

.field {
  display: flex;
  flex-direction: column;
  text-align: left;

  padding-top: 1em;
  padding-bottom: 0;

  p {
    font-size: 20px;
    margin: 0;
  }
}

.toggleLoginSignInText {
  color: var(--v-cBlue-darken1);
  cursor: pointer;
}

.userMenu {
  background-color: white;

  p {
    padding: 1em;
    margin: 0;
  }

  p.logoutBtn {
    cursor: pointer;

    &:hover {
      background-color: #eee;
    }
  }
}
</style>
