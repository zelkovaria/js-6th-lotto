import { MissionUtils } from "@woowacourse/mission-utils";
import Validator from "./Validate.js";

class WinningNum {
  static #WINNINGNUM_INPUT = "당첨 번호를 입력해 주세요.\n";
  static #BONUSNUM_INPUT = "보너스 번호를 입력해 주세요.\n";

  async askWinngNum() {
    const userInputWinningNum = await MissionUtils.Console.readLineAsync("");
    const winningNum = userInputWinningNum.split(",");
    Validator.validateInputMoney(winningNum);

    return winningNum;
  }

  async askBonusNum() {
    const userInputBonusNum = await MissionUtils.Console.readLineAsync("");
    const bonusNum = userInputBonusNum.split(",");
    Validator.validateInputMoney(bonusNum);

    return bonusNum;
  }
}
export default WinningNum;