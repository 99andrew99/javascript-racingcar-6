const MissionUtils = require("@woowacourse/mission-utils");

class App {
    cars = []; // 자동차 객체를 저장할 배열
    tryNum = 0; //몇회 할 것인지 저장하는 변수

    async play() {}

    async InputCarName() {
        const name = await MissionUtils.Console.readLineAsync(
            "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
        );
        // 자동차의 이름을 ',' 기준으로 나누어서 이름 형식 검사 후 올바르면
        // 이름과 거리(0으로 초기화)를 담은 객체를 추가
        this.cars = name.split(",").map((carName) => {
            if (carName.length > 5) {
                throw Error("[ERROR] 이름이 잘못된 형식입니다.");
            }
            return { name: carName, distance: 0 };
        });
    }
}

export default App;
