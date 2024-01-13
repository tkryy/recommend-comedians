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

export const ContactForm = () => {
  const defaultinfo: ContactInfo = {
    name: "名前",
    mail: "example@smarthr.co.jp",
    body: "お問合せ内容"
  }
  const [contactinfo, setContactinfo] = useState<ContactInfo>(defaultinfo)

  return (
    <div className=" md:mt-96 mt-36">
      <div className="flex justify-center">
        <h1 className="text-3xl">お問い合わせフォーム</h1>
      </div>

      <form className="">
        {/* 名前 */}
        <div className="">
          <div className="flex justify-center mt-8 md:mr-[335px] mr-[270px]">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">お名前</label>
          </div>
          <div className="flex justify-center mt-2">
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
          <div className="mt-4">
            <div className="flex justify-center md:mr-[300px] mr-[240px]">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">メールアドレス</label>
              {/* <p className="text-white bg-red-600 rounded ml-2 ">必須</p> */}
            </div>
            <div className="flex justify-center">
              <input type="text" id="mail_address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-96 w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="example@smarthr.co.jp"
                onChange={(e) => {
                  setContactinfo({ ...contactinfo, mail: e.target.value });
                }} required></input>
            </div>
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
        <div className="">
          <div className="flex justify-center mt-4 md:mr-[300px] mr-[230px]">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">お問い合わせ</label>
            {/* <TextareaComp name="お問い合わせ内容" value={"お問合せ内容を記入してください。"} /> */}
          </div>
          <div className="flex justify-center">
            <input type="text" id="contact" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-96 w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="お問い合わせ内容"
              onChange={(e) => {
                setContactinfo({ ...contactinfo, body: e.target.value });
              }} required></input>
          </div>
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
        <div className="flex justify-center mt-12">
          <ContactSendButton contactinfo={contactinfo} />
        </div>
      </form>
    </div>
  );
};