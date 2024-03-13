import ConnectMongoDB from "@/lib/mongodb";
import Topic from "@/models/topicModel";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req) {
  try {
    const { title, description } = await req.json();
    if (!title || !description) {
      return NextResponse.json(
        { message: "Please fill all the fields" },
        { status: 400 }
      );
    }
    console.log("Test............");

    await ConnectMongoDB();

    await Topic.create({
      title,
      description,
    });

    return NextResponse.json(
      { message: "Post Created Successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log("THe error" + error);
  }
}
export async function GET() {
  await ConnectMongoDB();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");

  await ConnectMongoDB();

  await Topic.findByIdAndDelete(id);

  console.log(id);
  return NextResponse.json(
    { message: "Deleted Successfully" },
    { status: 200 }
  );
}
