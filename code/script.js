const masuk = document.getElementById("masuk");
const daftar = document.getElementById("daftar");
const btnFormMasuk = document.getElementById("btn-form-masuk");
const btnFormDaftar = document.getElementById("btn-form-daftar");
const kosongMasuk = document.getElementById("kosong-masuk");
const kosongDaftar = document.getElementById("kosong-daftar");
const btnMasukData = document.getElementById("btn-masuk-data");
const btnDaftarData = document.getElementById("btn-daftar-data");

document.addEventListener("DOMContentLoaded", function () {
  console.log("cek");
  masuk.style.display = "none";
  daftar.style.display = "none";
});

btnFormMasuk.addEventListener("click", function () {
  masuk.style.display = "flex";
});

btnFormDaftar.addEventListener("click", function () {
  daftar.style.display = "flex";
});

kosongMasuk.addEventListener("click", function () {
  masuk.style.display = "none";
});
kosongDaftar.addEventListener("click", function () {
  daftar.style.display = "none";
});

btnMasukData.addEventListener("click", function () {
  const usernameMasuk = document.getElementById("username-masuk");
  let username = usernameMasuk.value;
  alert(`Selamat Masuk ${username}`);
});

btnDaftarData.addEventListener("click", function () {
  const usernameDaftar = document.getElementById("username-daftar");
  let username = usernameDaftar.value;
  alert(`Selamat, Akun atas nama ${username} telah terdaftar`);
});
