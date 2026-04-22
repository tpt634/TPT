function giris() {
  let kullanici = prompt("Kullanıcı adı");
  let sifre = prompt("Şifre");

  if (kullanici === "YUSUF" && sifre === "123") {
    document.getElementById("mesaj").innerText = "Hoşgeldin en yetkili YUSUF";
  } 
  else if (kullanici === "başkan") {
    document.getElementById("mesaj").innerText = "Başkan hoşgeldin";
  } 
  else {
    document.getElementById("mesaj").innerText = "Giriş yapıldı";
  }
}
