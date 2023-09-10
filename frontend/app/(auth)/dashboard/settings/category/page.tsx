import DataTable from "@/components/CategoriesTable";
import TextField from "@mui/material/TextField";
import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import CategoryModel from "@/components/CategoryModel";

function Page() {
  return (
    <main>
      <section className="flex gap-6 w-full">
        <Card className="w-full">
          <CategoryModel />
          <DataTable />
        </Card>
        <Card className="w-1/2 hidden lg:flex">
          <CardBody>
            <h3 className="text-xl font-semibold text-slate-700 my-3">
              Create New Category
            </h3>
            <form action="#">
              <TextField id="category" label="Category" variant="outlined" />
              <Button className="bg-slate-900 text-slate-50 my-3">
                Submit
              </Button>
            </form>
          </CardBody>
        </Card>
      </section>
    </main>
  );
}

export default Page;
