<template>
  <v-app>
    <v-content>
      <v-conteiner class="fill-height fluid">
        <v-row align="center" justify="center">
          <v-col cols="12" sm="6" class="align-center">
            <v-img
              src="../assets/Logo_Ezer.png"
              max-height="83"
              max-width="422"
              class="mb-10 mt-10 mx-10 mx-auto"
            >
            </v-img>
            <v-card class="elevation-15 outlined pa-1 justify-center">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-card-text class="mt-8 mx-10 align-center">
                      <div class="Black--text text-center">
                        <h1
                          class="text-center title-1 text--accent-3 EzerRed--text font-weight-bold"
                          style="font-family: 'Heebo', sans-serif"
                        >
                          כניסה למערכת
                        </h1>
                      </div>
                      <v-form align="center" @keydown.enter="submit">
                        <p
                          class="mt-8 mr-16 text-right"
                          style="font-family: 'Heebo', sans-serif"
                          @keydown.enter="submit"
                        >
                          שם משתמש
                        </p>
                        <v-text-field
                          v-model="username"
                          class="mx-15 mb-10"
                          lable="שם משתמש"
                          name="username"
                          color="EzerRed"
                          append-icon="fas fa-user"
                          solo
                          clearable
                        />
                        <p
                          class="mt-10 mr-16 text-right"
                          style="font-family: 'Heebo', sans-serif"
                          @keydown.enter="submit"
                        >
                          סיסמה
                        </p>
                        <v-text-field
                          v-model="password"
                          :type="show1 ? 'text' : 'password'"
                          class="mx-15 mb-10"
                          lable="סיסמה"
                          name="password"
                          color="EzerRed"
                          append-icon="fas fa-lock"
                          solo
                          clearable
                        />
                        <v-btn
                          class="ma-2 white--text"
                          :loading="loading"
                          :disabled="loading"
                          @click="submit()"
                          elevation="10"
                          large
                          color="EzerRed"
                          style="font-family: 'Heebo', sans-serif"
                          >כניסה</v-btn
                        >
                      </v-form>
                    </v-card-text>
                  </v-row>
                </v-window-item>
                <v-window-item value="2"> </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-conteiner>
    </v-content>
  </v-app>
</template>

<script>
import firebase from "firebase";
import "firebase/auth";

export default {
  data() {
    return {
      username: "",
      password: "",
      error: "",
      email: "",
      loading: false,
    };
  },
  methods: {
    submit() {
      this.email = this.username.concat("@ezer.com");
      this.loading = true;
      console.log(this.email);
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          () => {
            this.$router.push("/home");
            this.loading = false;
          },
          (err) => {
            alert(err.message);
            this.loading = false;
          }
        );
    },
  },
};
</script>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         <template>
  <v-app>
    <v-content>
      <v-conteiner class="fill-height fluid">
        <v-row align="center" justify="center">
          <v-col cols="12" sm="6" class="align-center">
            <v-img
              src="../assets/Logo_Ezer.png"
              max-height="83"
              max-width="422"
              class="mb-10 mt-10 mx-10 mx-auto"
            >
            </v-img>
            <v-card class="elevation-15 outlined pa-1 justify-center">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-card-text class="mt-8 mx-10 align-center">
                      <div class="Black--text text-center">
                        <h1
                          class="text-center title-1 text--accent-3 EzerRed--text font-weight-bold"
                          style="font-family: 'Heebo', sans-serif"
                        >
                          כניסה למערכת
                        </h1>
                      </div>
                      <v-form align="center" @keydown.enter="submit">
                        <p
                          class="mt-8 mr-16 text-right"
                          style="font-family: 'Heebo', sans-serif"
                          @keydown.enter="submit"
                        >
                          שם משתמש
                        </p>
                        <v-text-field
                          v-model="username"
                          class="mx-15 mb-10"
                          lable="שם משתמש"
                          name="username"
                          color="EzerRed"
                          append-icon="fas fa-user"
                          solo
                          clearable
                        />
                        <p
                          class="mt-10 mr-16 text-right"
                          style="font-family: 'Heebo', sans-serif"
                          @keydown.enter="submit"
                        >
                          סיסמה
                        </p>
                        <v-text-field
                          v-model="password"
                          :type="show1 ? 'text' : 'password'"
                          class="mx-15 mb-10"
                          lable="סיסמה"
                          name="password"
                          color="EzerRed"
                          append-icon="fas fa-lock"
                          solo
                          clearable
                        />
                        <v-btn
                          class="ma-2 white--text"
                          :loading="loading"
                          :disabled="loading"
                          @click="submit()"
                          elevation="10"
                          large
                          color="EzerRed"
                          style="font-family: 'Heebo', sans-serif"
                          >כניסה</v-btn
                        >
                      </v-form>
                    </v-card-text>
                  </v-row>
                </v-window-item>
                <v-window-item value="2"> </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-conteiner>
    </v-content>
  </v-app>
</template>

<script>
import firebase from "firebase";
import "firebase/auth";

export default {
  data() {
    return {
      username: "",
      password: "",
      error: "",
      email: "",
      loading: false,
    };
  },
  methods: {
    submit() {
      this.email = this.username.concat("@ezer.com");
      this.loading = true;
      console.log(this.email);
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          () => {
            this.$router.push("/home");
            this.loading = false;
          },
          (err) => {
            alert(err.message);
            this.loading = false;
          }
        );
    },
  },
};
</script>