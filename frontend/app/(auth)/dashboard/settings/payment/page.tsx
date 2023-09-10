import TextField from "@mui/material/TextField";
import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import PaymentsTable from "@/components/PaymentsTable";
import PaymentModel from "@/components/PaymentModel";

function Page() {
  return (
    <main>
      <section className="flex gap-6 w-full">
        <Card className="w-full">
          <CardBody>
            <PaymentModel />
            <PaymentsTable />
          </CardBody>
        </Card>
        <Card className="w-1/2 hidden lg:flex">
          <CardBody>
            <h3 className="text-xl font-semibold text-slate-700 my-3">
              Create Payment Method
            </h3>
            <form action="#">
              <TextField id="category" label="Method" variant="outlined" />
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
