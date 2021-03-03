<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="EzerRed" dark fab v-bind="attrs" v-on="on" bottom right>
          <v-icon class="fas fa-plus"></v-icon>
        </v-btn>
      </template>
      <v-form ref="form">
        <v-card>
          <v-card-title>
            <span
              style="font-family: 'Heebo', sans-serif"
              class="text-center EzerRed--text"
              >קריאה חדשה</span
            >
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-select
                    v-model="group"
                    :items="['ירושלים', 'דרום', 'צפון', 'מרכז']"
                    label="קבוצה*"
                    required
                    color="EzerRed"
                  >
                  </v-select>
                </v-col>
                <v-col cols="12" sm="8" md="8">
                  <v-text-field
                    label="שם השולח*"
                    color="EzerRed"
                    required
                    v-model="sender"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    label="מוצא*"
                    color="EzerRed"
                    required
                    v-model="from"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    label="יעד*"
                    color="EzerRed"
                    required
                    v-model="to"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    label="תוכן הקריאה*"
                    color="EzerRed"
                    required
                    v-model="mission"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-container>
            <small>*שדות נדרשים</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="EzerRed"
              text
              @click="
                sendForm();
                dialog = false;
              "
            >
              שמירה
            </v-btn>
            <v-btn color="EzerRed" text @click="dialog = false"> סגירה </v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
  </v-row>
</template>

<script>
import db from "../db.js";
export default {
  data: () => ({
    docs: [],
    time: "",
    call_id: 0,
    dialog: false,
    group: "",
    sender: "",
    from: "",
    to: "",
    mission: "",
  }),
  methods: {
    sendForm() {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0");
      var yy = String(today.getYear()).slice(-2);
      today = mm + "/" + dd + "/" + yy;
      var date = String(today);
      this.call_id = this.getCallId(date)+1;
      db.collection("messages")
        .add({
          call_id:this.call_id,
          time: today,
          group: this.group,
          state: false,
          sender: this.sender,
          accepter: "-",
          from: this.from,
          to: this.to,
          mission: this.mission,
        })
        .then(function () {
          console.log("Document successfully written!");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
      db.collection("messages-out")
        .add({
          call_id:this.call_id,
          time: today,
          group: this.group,
          state: false,
          sender: this.sender,
          accepter: "-",
          from: this.from,
          to: this.to,
          <template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="EzerRed" dark fab v-bind="attrs" v-on="on" bottom right>
          <v-icon class="fas fa-plus"></v-icon>
        </v-btn>
      </template>
      <v-form ref="form">
        <v-card>
          <v-card-title>
            <span
              style="font-family: 'Heebo', sans-serif"
              class="text-center EzerRed--text"
              >קריאה חדשה</span
            >
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-select
                    v-model="group"
                    :items="['ירושלים', 'דרום', 'צפון', 'מרכז']"
                    label="קבוצה*"
                    required
                    color="EzerRed"
                  >
                  </v-select>
                </v-col>
                <v-col cols="12" sm="8" md="8">
                  <v-text-field
                    label="שם השולח*"
                    color="EzerRed"
                    required
                    v-model="sender"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    label="מוצא*"
                    color="EzerRed"
                    required
                    v-model="from"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    label="יעד*"
                    color="EzerRed"
                    required
                    v-model="to"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    label="תוכן הקריאה*"
                    color="EzerRed"
                    required
                    v-model="mission"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-container>
            <small>*שדות נדרשים</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="EzerRed"
              text
              @click="
                sendForm();
                dialog = false;
              "
            >
              שמירה
            </v-btn>
            <v-btn color="EzerRed" text @click="dialog = false"> סגירה </v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
  </v-row>
</template>

<script>
import db from "../db.js";
export default {
  data: () => ({
    docs: [],
    time: "",
    call_id: 0,
    dialog: false,
    group: "",
    sender: "",
    from: "",
    to: "",
    mission: "",
  }),
  methods: {
    sendForm() {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0");
      var yy = String(today.getYear()).slice(-2);
      today = mm + "/" + dd + "/" + yy;
      var date = String(today);
      this.call_id = this.getCallId(date)+1;
      db.collection("messages")
        .add({
          call_id:this.call_id,
          time: today,
          group: this.group,
          state: false,
          sender: this.sender,
          accepter: "-",
          from: this.from,
          to: this.to,
          mission: this.mission,
        })
        .then(function () {
          console.log("Document successfully written!");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
      db.collection("messages-out")
        .add({
          call_id:this.call_id,
          time: today,
          group: this.group,
          state: false,
          sender: this.sender,
          accepter: "-",
          from: this.from,
          to: this.to,
          mission: this.mission,
        })
        .then(function () {
          console.log("Document successfully written!");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
      this.$refs.form.reset();
    },
    getCallId(date) {
      var call_id = 0;
      db.collection("messages")
        .where("time", "==", date)
        .get()
        .then((querySnapshot)=> {
          this.docs = [];
          querySnapshot.forEach((doc) => {
          this.docs.push(doc.data());
          });
        })
        .catch((error)=> {
          console.log (error);
          return -1;
        });
        console.log(this.docs);
        this.docs.forEach(doc => {
          if (doc.call_id > call_id)
            call_id = doc.call_id;
        });
        return call_id;
    },
  },
};
</script>

