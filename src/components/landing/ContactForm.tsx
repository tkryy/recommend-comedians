"use client";

import React, { FC, useState } from 'react';
import {
  FormItem,
} from "@/components/landing/FormItem";
import {
  TextareaComp,
} from "@/components/landing/TextareaComp";
import {
  InputComp,
} from "@/components/landing/InputComp";
import {
  CheckboxContainer,
} from "@/components/landing/CheckboxContainer";

// const [ state, setState ] = useState({
//   comment: '芸人名やお問い合わせ内容を入力ください',
//   last_name: '',
//   first_name: '',
//   last_name_kana: '',
//   first_name_kana: '',
//   email: ''
// });

// お問い合わせ内容、氏名・氏名（フリガナ）・メールアドレスに関するonChangeハンドラ
// const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   e.persist();
//   const target = e.target;
//   const name = target.name;
//   setState(() => {
//     return {...state, [name]: target.value };
//   });
// }

// const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//   e.persist();
//   setState((prevState) => {
//     return {...prevState,  comment: e.target.value };
//   });
// }

const checkList = ["芸人について","不具合について","その他"];

export const ContactForm = () => {
  return (
    <div>
      <h1 className="">お問い合わせフォーム</h1>
      <form>
        <div>
          <div>
            <FormItem title="お問合せ項目" required={true}></FormItem>
          </div>
          {/* <div>
            <input type="radio" name="aradio" value="A" />
            <label>芸人について</label>
            <input type="radio" name="aradio" value="B" />
            <label>不具合について</label>
            <input type="radio" name="cradio" value="C" />
            <label>その他</label>
          </div> */}
          
          <CheckboxContainer name="about" value={checkList}/>
        </div>
        <hr></hr>

        <div>
          <div>
          <FormItem title="お問合せ内容" required={true}></FormItem>
          </div>
          <p className="text-gray-400"><TextareaComp name="お問い合わせ内容" value={"お問合せ内容を記入してください。"} /></p>
        </div>
        <hr></hr>

        <div>
          <div>
            <FormItem title="お名前" required={true}></FormItem>
          </div>
          <div>
            <p>姓<input type="text" /></p><p>名<input type="text" /></p>
          </div>
        </div>
        <hr></hr>
        <div>
          <div>
            <div>
              <FormItem title="メールアドレス" required={true}></FormItem>
            </div>
          </div>
          <p><input type="text" /></p>
        </div>
        <hr></hr>

        <div>
          <div>
            <p>返信不要欄</p>
          </div>
          <div>
            <input type="checkbox" /><p>返信不要 <span>※返信が不要な場合はチェックしてください</span></p>
          </div>
        </div>

      </form>
    </div>

  );
};




//例




// const ContactForm: FC = () => {
//   const [ state, setState ] = useState({
//     comment: '商品名やお問い合わせ内容を入力ください',
//     last_name: '',
//     first_name: '',
//     last_name_kana: '',
//     first_name_kana: '',
//     email: '',
//   });

//   const clearAllInputValue = () => {
//     setState({
//       comment: '',
//       last_name: '',
//       first_name: '',
//       last_name_kana: '',
//       first_name_kana: '',
//       email: ''
//     });
//   };

//   // お問い合わせ項目のリストを作成
//   const checkList = ["芸人について","不具合について","その他"];

//   // お問い合わせ内容に関するonChangeハンドラ
//   const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     e.persist();
//     setState((prevState) => {
//       return {...prevState,  comment: e.target.value };
//     });
//   }

//   // お問い合わせ内容、氏名・氏名（フリガナ）・メールアドレスに関するonChangeハンドラ
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     e.persist();
//     const target = e.target;
//     const name = target.name;
//     setState(() => {
//       return {...state, [name]: target.value };
//     });
//   }

//   // 送信ボタンを押下したら発火
//   const submitAlert = (e: React.MouseEvent) => {
//     e.persist();
//     e.preventDefault();
//     const error = Object.values(state).some((value) => {
//       return value.length === 0;
//     });

//     if(error) {
//       alert('未入力項目があります');
//     } else {
//       alert('送信します');
//     }

//   };

//   return (
//     <>
//       <h2>お問い合わせフォーム</h2>
//       <form>
//         <div>
//           <div>
//             <FormItem title='お問い合わせ項目' required={true}></FormItem>
//           </div>
//           <CheckboxContainer name="about" value={checkList}/>
//         </div>
//         <hr></hr>
//         <div>
//           <div>
//             <FormItem title='お問い合わせ内容' required={true}></FormItem>
//           </div>
//           <TextareaComp name="お問い合わせ内容" value={state.comment} onChange={onChangeHandler}/>
//         </div>
//         <hr></hr>
//         <div>
//           <div>
//             <FormItem title='お名前' required={true}></FormItem>
//           </div>
//           <div>
//             <p>姓<InputComp name="last_name" value={state.last_name} onChange={handleInputChange}/></p>
//             <p>名<InputComp name="first_name" value={state.first_name} onChange={handleInputChange}/></p>
//           </div>
//         </div>
//         <hr></hr>
//         <div>
//           <div>
//             <FormItem title='フリガナ' required={true}></FormItem>
//           </div>
//           <div>
//           <p>セイ<InputComp name="last_name_kana" value={state.last_name_kana} onChange={handleInputChange}/></p>
//           <p>メイ<InputComp name="first_name_kana" value={state.first_name_kana} onChange={handleInputChange}/></p>
//           </div>
//         </div>
//         <hr></hr>
//         <div>
//           <div>
//             <div>
//               <FormItem title='メールアドレス' required={true}></FormItem>
//             </div>
//           </div>
//           <p><InputComp name="email" value={state.email} onChange={handleInputChange}/></p>
//         </div>
//       </form>
//       <div>
//         <button onClick={clearAllInputValue}>入力内容をクリア</button> <button onClick={submitAlert}>送信</button>
//       </div>
//     </>
//   );
// };

// export default ContactForm;