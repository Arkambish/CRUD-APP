import ConnectMongoDB from "@/lib/mongodb";
import Topic from "@/models/topicModel";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const { id } = params;
  const { newTitle: title, newDiscription: description } = await req.json();

  await ConnectMongoDB();
  await Topic.findByIdAndUpdate(id, { title, description });
  return NextResponse.json(
    { message: "Updated Successfully" },
    { status: 200 }
  );
}

export async function GET(req, { params }) {
  const { id } = params;
  await ConnectMongoDB();
  const user = await Topic.findOne({ _id: id });

  return NextResponse.json({ user }, { status: 200 });
}
