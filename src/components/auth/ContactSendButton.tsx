"use client";

import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { ContactInfo } from "@/models/ContactInfo";

interface ContactFormProps {
  contactinfo: ContactInfo;
}

export default function ContactSendButton({
  contactinfo,
}: ContactFormProps) {
  async function Send() {
    await axios.post(`/api/contact`, contactinfo);
  }

  return (
    <button className="btn btn-primary" onClick={Send}>
      送信
    </button>

  );
  }