import TextField from "@mui/material/TextField";
import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import ProcedureTable from "@/components/ProcedureTable";
import ProcedureModel from "@/components/ProcedureModel";
import SurgicalModel from "@/components/SurgicalModel";
import SurgicalTable from "@/components/SurgicalTable";

function Page() {
  return (
    <main>
      <section className="flex gap-6 w-full">
        <Card className="w-full">
          <SurgicalModel />
          <SurgicalTable />
        </Card>
        <Card className="w-1/2 hidden lg:flex">
          <CardBody>
            <h3 className="text-xl font-semibold text-slate-700 my-3">
              Create New Surgical
            </h3>
            <form action="#" className="grid gap-3">
              <TextField
                required
                id="category"
                label="Surgical Name"
                variant="outlined"
              />
              <TextField
                required
                id="category"
                label="Price"
                type="number"
                variant="outlined"
              />
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
