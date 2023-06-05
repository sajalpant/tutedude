import refer from "../CSS/refer.module.css";
import people from "../Resources/people.svg"
import rupee from "../Resources/rupee.svg"
import tag from "../Resources/tag.svg"
import discount from "../Resources/discount.svg"
import wallet from "../Resources/wallet.svg"

export const ReferAndEarn=()=>{
    return <div id={refer.container}>
        
     
       <div id={refer.firstBox}>
          <div id={refer.f_left_box} >
                   <div id={refer.f_left_box_inner}>  
                         <div className={refer.number}>
                            <p>Referral Earning</p>
                            <p>₹ 2,500</p>
                         </div>
                         <div className={refer.number}>
                            <p>Total Referrals</p>
                            <p>7</p>
                         </div>
                         <div className={refer.number}>
                            <p>Wallet Balance</p>
                            <p>₹ 500</p>
                         </div>
                   </div>
                   <div >
                    <button id={refer.btn}>Withdraw Balance</button>

                   </div>
          </div> 
    
         <div id={refer.f_right_box}>
                  <p>Your Referral Code </p>
                  <p>EDCH54</p>
        </div>
       
        </div>
<div>
<p id={refer.head} >How does it work ?</p>
</div>
        <div id={refer.listofitem}>
           
           <div id={refer.leftdiv}>
                  <div className={refer.liststyle}>
                       <div><img src={people} alt="err" /></div>
                       <div>
                        <p>Invite your Friends</p>
                         <p>Share the link tutedude.com with
your friends</p>
                        </div>
                  </div>
                  
                  <div className={refer.liststyle}>
                       <div><img src={rupee} alt="err" /></div>
                       <div>
                        <p>You get ₹ 200 as referral money</p>
                         <p>On total purchase the friend makes, into your wallet</p>
                        </div>
                  </div>

                  <div className={refer.liststyle}>
                       <div><img src={wallet} alt="err" /></div>
                       <div>
                        <p>Transfer money from wallet</p>
                         <p>When the wallet balance reaches
₹200 or more, you can withdraw it</p>
                        </div>
                  </div>
                               
           </div>

           <div id={refer.rightdiv}>
                  <div className={refer.liststyle}>
                       <div><img src={tag} alt="err" /></div>
                       <div>
                        <p>Friend purchases any course</p>
                         <p>Using your REFERRAL CODE in the payments page</p>
                        </div>
                  </div>
                  <div className={refer.liststyle}>
                       <div><img src={discount} alt="err" /></div>
                       <div>
                        <p>Your Friend gets ₹ 200 Off </p>
                         <p>On his overall fee on successful purchase using your referral code </p>
                        </div>
                  </div>
           </div>
        </div>
        <p className={refer.lastlines} >Friends Who Enrolled</p>
        <p className={refer.lastlines} >Terms & Conditions</p>
    </div>
}