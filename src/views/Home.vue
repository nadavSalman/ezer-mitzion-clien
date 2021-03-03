<template v-slot:activator="{ on, attrs }">
  <v-app>
    <v-container fluid>
      <v-co<template v-slot:activator="{ on, attrs }">
  <v-app>
    <v-container fluid>
      <v-content>
        <v-app-bar dark class="'gray darken-4'">
          <v-row justify="start">
            <v-img
              src="../assets/Logo_Ezer_Small_White.png"
              max-height="52"
              max-width="265"
              class="ma-0"
              contain
            >
            </v-img>
          </v-row>
          <v-row justify="end">
            <div class="home">
              <v-btn
                @click="signOut"
                class="EzerRed white--text ml-5"
                style="font-family: 'Heebo', sans-serif"
                >התנתק</v-btn
              >
            </div>
          </v-row>
        </v-app-bar>
        <v-simple-table fixed-header>
          <thead>
            <tr>
              <th
                style="font-family: 'Heebo', sans-serif"
                class="text-center red--text"
              >
                תאריך
              </th>
              <th
                style="font-family: 'Heebo', sans-serif"
                class="text-center red--text"
              >
                מס קריאה
              </th>
              <th
                style="font-family: 'Heebo', sans-serif"
                class="text-center red--text"
              >
                קבוצה
              </th>
              <th
                style="font-family: 'Heebo', sans-serif"
                class="text-center red--text"
              >
                מצב
              </th>
              <th
                style="font-family: 'Heebo', sans-serif"
                class="text-center red--text"
              >
                שולח
              </th>
              <th
                style="font-family: 'Heebo', sans-serif"
                class="text-center red--text"
              >
                מקבל
              </th>
              <th
                style="font-family: 'Heebo', sans-serif"
                class="text-center red--text"
              >
                ממקום
              </th>
              <th
                style="font-family: 'Heebo', sans-serif"
                class="text-center red--text"
              >
                למקום
              </th>
              <th
                style="font-family: 'Heebo', sans-serif"
                class="text-center red--text"
              >
                משימה
              </th>
              <th
                style="font-family: 'Heebo', sans-serif"
                class="text-center red--text"
              >
                מחיקה
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="call in calls" :key="call.time">
              <td style="font-family: 'Heebo', sans-serif" class="text-center">
                {{ call.time }}
              </td>
              <td style="font-family: 'Heebo', sans-serif" class="text-center">
                {{ call.call_id }}
              </td>
              <td style="font-family: 'Heebo', sans-serif" class="text-center">
                {{ call.group }}
              </td>
              <td class="text-center justify-center">
                <div
                  v-if="call.state == true"
                  class="text-center justify-center"
                >
                  <v-icon
                    color="green"
                    class="fas fa-check justify-center"
                  ></v-icon>
                </div>
                <div v-else>
                  <v-icon
                    color="EzerRed"
                    class="fas fa-times justify-center"
                  ></v-icon>
                </div>
              </td>

              <td style="font-family: 'Heebo', sans-serif" class="text-center">
                {{ call.sender }}
              </td>
              <td style="font-family: 'Heebo', sans-serif" class="text-center">
                {{ call.accepter }}
              </td>
              <td style="font-family: 'Heebo', sans-serif" class="text-center">
                {{ call.from }}
              </td>
              <td style="font-family: 'Heebo', sans-serif" class="text-center">
                {{ call.to }}
              </td>
              <td style="font-family: 'Heebo', sans-serif" class="text-center">
                {{ call.mission }}
              </td>

              <td class="text-center">
                <v-btn
                  small
                  icon
                  color="EzerRed"
                  style="font-family: 'Heebo', sans-serif"
                  @click="deleteData(call.id)"
                >
                  <v-icon class="fas fa-trash-alt"></v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-content>
    </v-container>
    <v-footer fixed app color="white">
      <div class="align-start ma-10">
        <newTask />
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import firebase from "firebase";
import db from "@/db.js";
import newTask from "./New.vue";

export default {
  components: {
    newTask,
  },
  data() {
    return {
      dialog: false,
      isLoggedIn: true,
      currentUser: false,
      calls: [],
      ids: [],
    };
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/");
        });
      this.$router.replace({ name: "Login" });
    },
    getData() {
      db.collection("messages").onSnapshot((querySnapshot) => {
        this.calls = [];
        this.ids = [];
        querySnapshot.forEach((doc) => {
          var data = doc.data();
          var time = String(data.time);
          var month = time.substring(0,2);
          var day = time.substring(3,5);
          var year = time.substring(6,8); 
          time = day+'/'+month+'/'+year;
          data.time = time;
          this.calls.push(data);
          this.ids.push(doc.id);
          this.calls.forEach((call, index) => {
            call.id = this.ids[index];
          });
        });
      });
    },
    deleteData(doc) {
      this.getData();
      if (confirm("האם אתה בטוח שברצונך למחוק את התיעוד?")) {
        const index = this.ids.indexOf(doc);
        if (index > -1) {
          this.ids.splice(index, 1);
        }
        db.collection("messages")
          .doc(doc)
          .delete()
          .then(function () {
            console.log("Document successfully deleted!");
          })
          .catch(function (error) {
            console.error("Error removing document: ", error);
          });
        this.getData();
      }
    },
  },
  mounted() {
    this.getData();
    window.setInterval(() => {
      this.getData();
    }, 1000);
  },
};
</script>