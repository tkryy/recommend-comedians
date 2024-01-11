"use client";

import ContactSendButton from "@/components/auth/ContactSendButton";
import { ContactInfo } from "@/models/ContactInfo";

import React, { ChangeEventHandler, FC, useState, FormEventHandler } from 'react';
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

const checkList = ["芸人について", "不具合について", "その他"];

// const validateMessages = {
//   required: "${label}は必須です。",
//   types: {
//     email: "${label}を正しい形式で入力してください。",
//   },
// };

// const onFinish = (item: string) => {
//   console.log(item);
// }

// return (
//   <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}></Form>
// );

export const ContactForm = () => {
  const defaultinfo: ContactInfo = {
    name: "名前",
    mail: "example@smarthr.co.jp",
    body: "お問合せ内容"
  }
  const [contactinfo, setContactinfo] = useState<ContactInfo>(defaultinfo)

  // const handleContactInfoChange: ChangeEventHandler<HTMLInputElement> = ({
  //   target
  // }) => {
  //   setContactinfo(target.value);
  // };

  // const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
  //   event.preventDefault();
  //   alert(
  //     `contactinfo: ${contactinfo}`
  //   );
  // };

  return (
    <div className="md:ml-40 mt-24">
      <h1 className="text-3xl md:ml-0 ml-2">お問い合わせフォーム</h1>
      <form>
        {/* 名前 */}
        <div className="md:ml-0 ml-2">
          <div className="mt-8">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">お名前</label>
          </div>
          <div className="flex space-x-8 mt-2">
            <div className="flex space-x-4">
              <input type="text" id="name" className="md:w-96 w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="お名前" 
                onChange={(e) => {
                  setContactinfo({ ...contactinfo, name: e.target.value });
                }} required></input>
            </div>
          </div>
        </div>
        <hr></hr>

        {/* メールアドレス */}
        <div>
          <div className="mt-4 md:ml-0 ml-2">
            <div className="flex">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">メールアドレス</label>
              {/* <p className="text-white bg-red-600 rounded ml-2 ">必須</p> */}
            </div>
            <input type="text" id="mail_address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-96 w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="example@smarthr.co.jp" 
            onChange={(e) => {
              setContactinfo({ ...contactinfo, mail: e.target.value });
            }} required></input>
          </div>
        </div>
        <hr></hr>

        {/* お問合せ項目
        <div className="md:ml-0 ml-2">
          <div className="flex mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">お問い合わせ項目</label>
          </div>
          <div>
            <CheckboxContainer name="about" value={checkList} />
          </div>
        </div>
        <hr></hr> */}

        {/* お問合せ内容 */}
        <div className="md:ml-0 ml-2">
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">お問い合わせ</label>
            {/* <TextareaComp name="お問い合わせ内容" value={"お問合せ内容を記入してください。"} /> */}
          </div>
          <input type="text" id="contact" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-96 w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="お問い合わせ内容" 
            onChange={(e) => {
              setContactinfo({ ...contactinfo, body: e.target.value });
            }} required></input>
        </div>
        <hr></hr>

        {/* 返信不要欄 */}
        {/* <div className="md:ml-0 ml-2">
          <div className="flex space-x-2 mt-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">返信不要欄</label>
            <input type="checkbox" />
            <p>※返信が不要な場合はチェックしてください</p>
          </div>
        </div> */}


        {/* ダミーボタンを作る */}
        <div className="mt-2 md:ml-0 ml-4">
          <ContactSendButton contactinfo={contactinfo} />
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