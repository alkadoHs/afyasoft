import DataTable from "@/components/CategoriesTable";
import { Card, CardBody } from "@nextui-org/card";

function Page() {
  return (
    <main>
      <section className="flex gap-6 w-full">
        <Card className="w-full">
          <CardBody>
            <DataTable />
          </CardBody>
        </Card>
        <Card>
          <CardBody>Create Category</CardBody>
        </Card>
      </section>
    </main>
  );
}

export default Page;
