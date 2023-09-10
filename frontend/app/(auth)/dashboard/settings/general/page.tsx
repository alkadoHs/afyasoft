import UploadPicture from "@/components/UploadPicture";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";

function Page() {
  return (
    <main>
      <section className="lg:flex grid w-full gap-6">
        <Card>
          <CardBody>
            <UploadPicture />
          </CardBody>
        </Card>
        <Card className="w-full">
          <CardBody className="grid grid-cols-1 gap-4">
            <TextField
              id="outlined-basic"
              label="Name"
              defaultValue={"Hekima Dispensary"}
              variant="outlined"
            />
            <FormControl className="w-full">
              <InputLabel id="demo-simple-select-label">Title</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={"Hekima Dispensary"}
                label="Title"
              >
                <MenuItem value={"hospital"}>Hospital</MenuItem>
                <MenuItem value={"dispensary"}>Dispensary</MenuItem>
                <MenuItem value={"laboratory"}>Laboratory</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="outlined-basic"
              label="Address"
              defaultValue={"Soweto Mbeya"}
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Email"
              defaultValue={"hekima@gmail.com"}
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              defaultValue={"076543346"}
            />
            <TextField
              error={true}
              defaultValue={"God will heal you"}
              id="outlined-basic"
              label="Invoice Message"
              variant="outlined"
              helperText="invalid input"
            />
            <div>
              <Button>Submit</Button>
            </div>
          </CardBody>
        </Card>
      </section>
    </main>
  );
}

export default Page;
