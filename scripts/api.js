export class Github {
  constructor() {
    this.client_id = "2d6d2f1d441e45533815";
    this.client_secret = "5bbcc5c85e2c37886e26080c910d9efcec5eaaa0";
    this.per_page = 10;
    this.sort = "asc";
  }
  //* api'den kullanıcı bilgilerini alma
  async fetchUserData(username) {
    // parametre olarak gelen kullanıcı adına göre istek attık
    const profileRes = await fetch(
      `https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    // kullanıcı repolarını almak için istek attık
    const repoRes = await fetch(
      `https://api.github.com/users/${username}/repos?cliend_id=${this.client_id}&client_secret=${this.client_secret}&per_page=${this.per_page}&sort=${this.sort}`
    );

    // apiden aldığımız cevabı json yapısına çevirdik
    const data = await profileRes.json();
    const repos = await repoRes.json();
    // fonksiyonun çağrıldığı yere bilgileri gönderme
    return { data, repos };
  }
}
