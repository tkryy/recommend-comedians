"use client";
import { useEffect, useState } from "react";

import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export interface IPlan {
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
  const formValue: IPlan = {
    id: uuidv4(),
    title: "title",
    content: "content",
    date: "date",
    section_id: "section_id",
  };

  async function handleSave() {
    formValue.title = title;
    await axios.post("/api/plan", formValue);
  }

  async function handleDelete(plan: IPlan) {
    await axios.delete("/api/plan", { data: { id: plan.id } });
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
        <div key={plan.id} className="flex">
          {plan.title}
          <button
            onClick={() => {
              handleDelete(plan);
            }}
          >
            delete
          </button>
        </div>
      ))}
      <form>
        <input
          className="input input-bordered w-full max-w-xs"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
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
