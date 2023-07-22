import React from 'react';
import s from './Dialogs.module.css';
const Dialogs = (props) =>{
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    Salohiddin
                </div>
                <div className={s.dialog}>
                    Ibrohim
                </div>
                <div className={s.dialog}>
                    Abduqodir
                </div>
                <div className={s.dialog}>
                    Shohjahon
                </div>
                <div className={s.dialog}>
                    Xurshid
                </div>
                <div className={s.dialog}>
                    Murod
                </div>
                <div className={s.dialog}>
                    Abror
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Salom</div>
                <div className={s.message}>Ishlaring yaxshimi?</div>
                <div className={s.message}>Zo'r</div>
            </div>

        </div>
    )
}
export default Dialogs;