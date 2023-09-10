import { ArrowTrendingUpIcon } from "@heroicons/react/20/solid";
import { Card, CardBody, CardHeader, CardFooter } from "@nextui-org/card";
import { CircularProgress } from "@nextui-org/progress";
import { Chip } from "@nextui-org/chip";
import Image from "next/image";
import React from "react";
import LinesChart from "@/components/LinesChart";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InvoiceDashTable from "@/components/InvoiceDashTable";
import Link from "next/link";
import DashboardSelect from "./DashboardSelect";

function Page() {
  return (
    <main className="mb-10">
      <section className="mb-6 flex justify-between items-center">
        <h3 className="text-slate-700 text-3xl font-medium">
          <span>Admin</span> <span className="hidden lg:inline">Dashboard</span>
        </h3>
        <DashboardSelect />
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="grid grid-cols-1 md:grid-cols-2 gap-2 bg-green-100">
          <CardHeader className="grid gap-0">
            <h2 className="text-xl font-semibold text-green-900">
              Welcome back 👋 <br /> <span>Alkado23</span>
            </h2>
            <p className="text-slate-500">Lorem ipsum, dolor sit</p>
          </CardHeader>
          <CardBody>
            <Image
              src={"/hospital2.png"}
              alt="Hospital"
              priority
              width={300}
              height={400}
            />
          </CardBody>
        </Card>
        <Card className="min-w-[350px]">
          <CardBody className="px-4 grid items-center">
            <h5 className="flex justify-between">
              <span>Total patents</span>
              <span>
                <ArrowTrendingUpIcon className="text-green-600 h-6 w-6" />
              </span>
            </h5>
            <div className="flex gap-3 justify-between items-center">
              <div>
                <p className="text-sm font-semibold text-slate-800">20.8 %</p>
                <p className="text-3xl font-bold text-slate-700">23,450</p>
              </div>
            </div>
          </CardBody>
        </Card>
      </section>

      <section className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4">
        <Card className="grid grid-cols-2 justify-between items-center">
          <CardBody>
            <h5 className="text-base text-slate-500">Total Medicines</h5>
            <p className="text-green-500">78.0%</p>
            <p className="text-xl font-bold text-slate-700">123,000</p>
          </CardBody>
          <CardFooter className="justify-end">
            {/* <ChartBarIcon className="w-10 h-10 stroke-cyan-500" /> */}
            <CircularProgress
              label="Speed"
              size="lg"
              value={30}
              color="danger"
              showValueLabel={true}
            />
          </CardFooter>
        </Card>
        <Card className="grid grid-cols-2 justify-between items-center">
          <CardBody>
            <h5 className="text-base text-slate-500">Total Medicines</h5>
            <p className="text-green-500">78.0%</p>
            <p className="text-xl font-bold text-slate-700">1,000</p>
          </CardBody>
          <CardFooter className="justify-end">
            {/* <ChartBarIcon className="w-10 h-10 stroke-cyan-500" /> */}
            <CircularProgress
              label="Speed"
              size="lg"
              value={70}
              color="success"
              showValueLabel={true}
            />
          </CardFooter>
        </Card>
        <Card className="grid grid-cols-2 justify-between items-center">
          <CardBody>
            <h5 className="text-base text-slate-500">Total Medicines</h5>
            <p className="text-green-500">78.0%</p>
            <p className="text-xl font-bold text-slate-700">123,000</p>
          </CardBody>
          <CardFooter className="justify-end">
            {/* <ChartBarIcon className="w-10 h-10 stroke-cyan-500" /> */}
            <CircularProgress
              label="Speed"
              size="lg"
              value={70}
              color="warning"
              showValueLabel={true}
            />
          </CardFooter>
        </Card>
      </section>

      <section className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <Card className="min-w-[300px] h-[350px] border-none bg-gradient-to-br from-violet-500 to-fuchsia-500">
          <CardHeader>
            <p className="text-lg text-slate-50 ">-Salles summary</p>
          </CardHeader>
          <CardBody className="justify-center items-center pb-0">
            <CircularProgress
              classNames={{
                svg: "w-[270px] h-[270px] drop-shadow-md",
                indicator: "stroke-white",
                track: "stroke-white/10",
                value: "text-3xl font-semibold text-white",
              }}
              value={70}
              strokeWidth={4}
              showValueLabel={true}
            />
          </CardBody>
          <CardFooter className="justify-center items-center pt-0">
            <Chip
              classNames={{
                base: "border-1 border-white/30",
                content: "text-white/90 text-small font-semibold",
              }}
              variant="bordered"
            >
              2800 Data points
            </Chip>
          </CardFooter>
        </Card>
        <Card className="shrink w-full">
          <CardHeader className="flex justify-between">
            <p className="text-xl text-semibold text-slate-500 ">Analytics</p>

            <FormControl className="w-48">
              <InputLabel id="demo-simple-select-label">Filter by</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
              >
                <MenuItem value={10}>Today</MenuItem>
                <MenuItem value={20}>This Week</MenuItem>
                <MenuItem value={30}>This Month</MenuItem>
                <MenuItem value={40}>This Yeadt</MenuItem>
              </Select>
            </FormControl>
          </CardHeader>
          <LinesChart />
        </Card>
      </section>

      <section className="grid lg:flex  lg:justify-between gap-4 w-full my-7">
        <Card className="w-full shrink">
          <CardBody>
            <p className="text-lg text-slate-500 my-2">New Invoices</p>
            <InvoiceDashTable />
            <p className="text-end underline my-2 text-sky-400">
              <Link href="#">View all invoices</Link>
            </p>
          </CardBody>
        </Card>
        <Card>
          <CardBody>New Patients table here😀</CardBody>
        </Card>
      </section>
    </main>
  );
}

export default Page;
