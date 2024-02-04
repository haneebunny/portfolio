const profile = {
  Name: "신하니",
  Phone: "010 2667 9004",
  Email: "re____@naver.com",
  Github: "https://github.com/haneebunny",
  "Blog(개발)": "https://hani-honey.tistory.com",
  "Blog(일상)": "https://blog.naver.com/re____",
};

const profileContainer = document.getElementById("profile");

for (const key in profile) {
  const value = profile[key];
  const profileElement = document.createElement("div");

  if (key === "Email") {
    // 이메일 주소인 경우 mailto 링크로 만들기
    profileElement.innerHTML = `
      <div class="profile-item">
        <p><strong>${key}</strong></p>
        <a href="mailto:${value}">${value}</a>
      </div>`;
  } else if (key !== "Name" && key !== "Phone") {
    // 그 외의 경우 링크로 만들기
    profileElement.innerHTML = `
      <div class="profile-item">
        <p><strong>${key}</strong></p>
        <a href="${value}" target="_blank">${value}</a>
      </div>`;
  } else {
    // 이름과 번호인 경우 링크로 만들지 않음
    profileElement.innerHTML = `
      <div class="profile-item">
        <p><strong>${key}</strong></p>
        <span>${value}</span>
      </div>`;
  }

  profileContainer.appendChild(profileElement);
}

const buttons = document.querySelectorAll("button");
for (const button of buttons) {
  button.addEventListener("click", function () {
    //선택된 button의 dataset.target명의 offsetTop을 구하는 변수를 선언한다.
    const scrollPosition = document.querySelector(
      this.dataset.target
    ).offsetTop;

    //scroll을 offsetTop으로 이동시킨다.
    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
  });
}
