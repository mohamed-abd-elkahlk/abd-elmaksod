import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { FaLocationDot, FaSquareWhatsapp } from "react-icons/fa6";

export default function page() {
  return (
    <section className="mt-12">
      <h2 className="text-3xl font-extrabold text-center">
        time of lessons and class
      </h2>{" "}
      <Table>
        <TableCaption>wiht my best wishes</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-right">سعر الشهر</TableHead>
            <TableHead>المعاد</TableHead>
            <TableHead>الايام</TableHead>
            <TableHead className="w-[100px]">الصف</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-right">50</TableCell>
            <TableCell>الساعه 3</TableCell>
            <TableCell>سبت اتنين اربع</TableCell>
            <TableCell className="font-medium">الاول الاعدادي</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-right">70</TableCell>
            <TableCell>الساعه 3</TableCell>
            <TableCell>احد ثلاثاء خميس</TableCell>
            <TableCell className="font-medium">الثاني الاعدادي</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-right">90</TableCell>
            <TableCell>الساعه 4</TableCell>
            <TableCell>سبت اتنين اربع</TableCell>
            <TableCell className="font-medium">الثالث الاعدادي</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-right">110</TableCell>
            <TableCell>الساعه 4</TableCell>
            <TableCell>احد ثلاثاء خميس</TableCell>
            <TableCell className="font-medium">الاول الثانوي</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="flex justify-between mt-6 items-center">
        <p className="flex gap-3">
          ههيا, العدوة بجوار فرن ابو عسكر
          <FaLocationDot className="text-3xl text-green-400" />
        </p>
        <div className="flex gap-3 items-center ">
          <FaSquareWhatsapp className="text-3xl text-green-400" />
          <div>
            <Link href={"https://api.whatsapp.com/send?phone=01207980918"}>
              <p>01207980918</p>
            </Link>
            <Link href={"https://api.whatsapp.com/send?phone=01080872555"}>
              <p>01080872555</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
