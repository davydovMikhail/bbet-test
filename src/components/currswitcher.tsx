import ethcurON from "../img/ethcurON.svg";
import ethcurOFF from "../img/ethcurOFF.svg";
import bbetcurON from "../img/bbetcurON.svg";
import bbetcurOFF from "../img/bbetcurOFF.svg";
import { Currency } from "../types/main";
import { useActions } from "../storeHooks/useActions"; 
import { useTypedSelector } from '../storeHooks/useTypedSelector';
import { Status } from "../types/main";

const Currswitcher = () => {
    const { SetCurrency } = useActions();
    const { status, currency } = useTypedSelector(state => state.main);
    
    return (
        <div className="bid__switch">
            <button
                className={currency === Currency.Ether ? "bid__on" : "bid__off"}
                onClick={() => {SetCurrency(Currency.Ether)}}
                disabled={status === Status.Loader}
            >
                <img src={currency === Currency.Ether ? ethcurON : ethcurOFF} alt="" />
                <div>ETH</div>
            </button>
            <button 
                className={currency === Currency.Split ? "bid__on" : "bid__off"}
                onClick={() => {SetCurrency(Currency.Split)}}
                disabled={status === Status.Loader}
            >
                <img src={currency === Currency.Split ? bbetcurON : bbetcurOFF} alt="" />
                <div>BBET</div>
            </button>
        </div>
    );
  };
  
export default Currswitcher;