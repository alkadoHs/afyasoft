import { Card, CardBody } from "@nextui-org/card";
import ImageUpload from "./ImageUpload";
import TextField from "@mui/material/TextField";
import PositionSelect from "./PositionSelect";
import DepartimentSelect from "./DepartimentSelect";
import { Button } from "@nextui-org/button";

function Page() {
  return (
    <main>
      <section className="grid lg:flex gap-6">
        <Card className="w-full">
          <CardBody className="grid grid-cols-1 lg:grid-cols-2 gap-6 shrink-0">
            <TextField id="fname" label="First Name" variant="outlined" />
            <TextField id="lname" label="Last Name" variant="outlined" />
            <TextField id="username" label="Username" variant="outlined" />
            <TextField id="Email" label="Email" variant="outlined" />
            <TextField id="pnumber" label="Phone Number" variant="outlined" />
            <TextField id="salary" label="Salary" variant="outlined" />
            <PositionSelect />
            <DepartimentSelect />
            <TextField
              id="password"
              label="Password"
              type="password"
              variant="outlined"
            />
            <TextField
              id="confirm"
              label="Confirm Password"
              variant="outlined"
            />

            <Button className="bg-slate-900 w-fit text-white">
              Create Staff
            </Button>
          </CardBody>
        </Card>
        <Card className="lg:w-1/2 w-full">
          <CardBody className="grid justify-center">
            <ImageUpload />
          </CardBody>
        </Card>
      </section>
    </main>
  );
}

export default Page;
