import View from "./View.js";
import Lotto from "./Lotto.js";
import LottoTickets from "./LottoTickets.js";
class App {
  lottoTickets;

  async play() {
    const inputMoney = await View.askInputMoney();
    const numberOfTickets = await new Lotto().countingLottos(inputMoney);
    await View.printLottoCount(numberOfTickets);
    const lottoTickets = new LottoTickets();
    this.lottoTickets = lottoTickets.generateLottoTickets(numberOfTickets);
    View.showTickets(this.lottoTickets);
    const resultWinNum = View.askWinningNum();
    const resultBonusNum = View.askBonusNum();
  }
}

export default App;
