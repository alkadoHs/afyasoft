import TextField from "@mui/material/TextField";
import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import ServiceModel from "./ServiceModel";
import ServiceTable from "./ServiceTable";

function Page() {
  return (
    <main>
      <section className="flex gap-6 w-full">
        <Card className="w-full">
          <CardBody>
            <ServiceModel />
            <ServiceTable />
          </CardBody>
        </Card>
        <Card className="w-1/2 hidden lg:flex">
          <CardBody>
            <h3 className="text-xl font-semibold text-slate-700 my-3">
              Create New Service
            </h3>
            <form action="#" className="grid gap-3">
              <TextField
                required
                id="service"
                label="Service Name"
                variant="outlined"
              />
              <TextField
                required
                id="price"
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
