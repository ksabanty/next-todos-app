import { NextResponse } from "next/server"
import db from '@/util/db';

export const GET = async (request: Request) => {
  const todos = await db.todo.findMany({});
  return NextResponse.json({ message: todos});
}

export const POST = async (request: Request) => {
  const data = await request.json();
  const todo = await db.todo.create({
    data,
  })
  return NextResponse.json({ message: todo });
}