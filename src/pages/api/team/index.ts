import type { APIRoute } from "astro";
import { app } from "../../../firebase/server";
import { getFirestore } from "firebase-admin/firestore";

export const post: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const name = formData.get("name")?.toString();
  const age = formData.get("age")?.toString();
  const isBestFriend = formData.get("isBestFriend") === "on";

  if (!name || !age) {
    return new Response("Missing required fields", {
      status: 400,
    });
  }
  try {
    const db = getFirestore(app);
    const res = db.collection("faculty").doc('aa').set({
      name,
      age: parseInt(age),
      isBestFriend,
    })
    // const friendsRef = db.collection("faculty");
    // // await friendsRef.add({
    // //   name,
    // //   age: parseInt(age),
    // //   isBestFriend,
    // // });
    console.log(res)
  } catch (error) {
    return new Response("Something went wrong", {
      status: 500,
    });
  }
  return redirect("/");
};