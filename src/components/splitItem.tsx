import { formatEther } from '@ethersproject/units'
import lost from "../img/lost.svg";
import won from "../img/won.svg";
import copyIcon from "../img/copy.svg";
import copy from 'copy-to-clipboard';
import { toast } from "react-toastify";
import { Currency } from '../types/main';

type ISplit = any;

const SplitItem = (props: ISplit, index: number) => {

    function copyToClipboard() {
        copy(props.player);
        toast.info('COPIED', {
            position: "bottom-center",
            autoClose: 100,
            hideProgressBar: true,
            pauseOnHover: false,
            draggable: true,
            theme: "dark",
        });
        return;
    }

    function payout() {
        return props.native ? Number(formatEther(props.payout)).toFixed(5) : Number(formatEther(props.payout)).toFixed(0);
    }

    function percent() {
        return props.right ? (1000 - Number(props.splitPoint)) / 10 : Number(props.splitPoint) / 10;
    }

    return (
        <div 
            className="table__item" 
            key={index}
            style={{
                background: (index + 1) % 2 === 1 ? '#fff' : 'transparent'
            }}
        >
            { props.result ? 
                <div className="table__cell">
                    <img src={won} className="table__icon" alt='won' />
                    <div className="table__text">
                        Won ({percent().toFixed(1)}%)
                    </div>
                </div>
                :  
                <div className="table__cell">
                    <img src={lost} className="table__icon" alt='lose' />
                    <div className="table__text">
                        Lose ({percent().toFixed(1)}%)
                    </div>
                </div>
            }
            <div className="table__cell">
                <img onClick={() => copyToClipboard()} src={copyIcon} className="table__icon table__copy" alt="copy" />
                <div className="table__text table__address">
                    {props.player.slice(0, 5)}....{props.player.slice(-4)}
                </div>
            </div>
            <div className="table__cell">
                <div className="table__text">
                {props.splitPoint}
                </div>
            </div>
            <div className="table__cell">
                <div className="table__text">
                {`${payout()} $${ props.native ? Currency.Ether : Currency.Split}`}
                </div>
            </div>
            <div className="table__cell">
                <div className="table__text">
                {Number(props.randomNumber)}
                </div>
            </div>
        </div>        
    )
}

export default SplitItem;