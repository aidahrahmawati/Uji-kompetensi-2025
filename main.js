import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function ambildaftartugas() {
  const refDokumen = collection(db, "senin");
  const kueri = query(refDokumen, orderBy("tugas"));
  const cuplikankueri = await getDocs(kueri);

  let hasil = [];
  cuplikankueri.forEach((dok) => {
    hasil.push({
      id: dok.id,
      tugas: dok.data().tugas,
      status: dok.data().status,
      prioritas: dok.data().prioritas,
      tanggal: dok.data().tanggal,
    });
  });