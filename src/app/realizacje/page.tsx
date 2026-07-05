import { redirect } from "next/navigation";

// Realizacje są podzielone wyłącznie na balie i sauny — brak widoku mieszanego.
export default function RealizacjePage() {
  redirect("/realizacje/balie");
}
