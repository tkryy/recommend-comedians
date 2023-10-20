"use client";
import { useEffect, useState } from "react";
import { firestore } from "firebase-admin";
import axios from "axios";

interface IPlan {
  id: string;
  title: string;
  content: string;
  date: string;
  section_id: string;
}

export default function TestButton() {
  const [plans, setPlans] = useState<IPlan[]>([]);
  const [title, setTitle] = useState("");

  const displayMonth = "9";
  const formValue = {
    title: "title",
    content: "content",
    date: "date",
    section_id: "section_id",
  };

  async function handleSave() {
    formValue.title = title;    
    await axios.post("/api/plan", formValue);
  }

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/api/plan?month=${displayMonth}`);
      console.log(data);
      setPlans(data);
    })();
  }, [displayMonth]);

  return (
    <div>
      {plans.map((plan) => (
        <div key={plan.id}>{plan.title}</div>
      ))}
      <form>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
      </form>
      <button
        onClick={() => {
          handleSave();
        }}
        className="btn btn-info"
      >
        Test
      </button>
    </div>
  );
}
