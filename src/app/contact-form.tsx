"use client";

import {
  Typography,
  Card,
  CardBody,
  Input,
  Textarea,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

export function ContactForm() {
  return (
    <section className="px-8 py-16" id="contact">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Hubungi Saya
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full lg:w-5/12 !text-gray-500"
        >
          Tertarik untuk berkolaborasi atau punya proyek yang ingin dikerjakan
          bersama? Jangan ragu untuk menghubungi saya melalui form di bawah ini.
        </Typography>
      </div>
      <div>
        <Card shadow={true} className="container mx-auto border border-gray/50">
          <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
            <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
              <Typography variant="h4" color="white" className="mb-2">
                Informasi Kontak
              </Typography>
              <Typography
                variant="lead"
                className="mx-auto mb-8 text-base !text-gray-500"
              >
                Silakan isi form atau hubungi saya langsung melalui informasi di
                bawah ini.
              </Typography>
              <div className="flex gap-5">
                <PhoneIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  +62 889-8061-5146
                </Typography>
              </div>
              <div className="flex my-2 gap-5">
                <EnvelopeIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  angeltesa11@gmail.com
                </Typography>
              </div>
              <div className="flex items-center gap-5 mt-10">
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-instagram text-lg" />
                </IconButton>
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-github text-lg" />
                </IconButton>
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-linkedin text-lg" />
                </IconButton>
              </div>
            </div>
            <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
              <form action="#">
                <div className="mb-8 grid gap-4 lg:grid-cols-2">
                  {/* @ts-ignore */}
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Nama Depan"
                    name="first-name"
                    placeholder="cth. Angel"
                    containerProps={{
                      className: "!min-w-full mb-3 md:mb-0",
                    }}
                  />
                  {/* @ts-ignore */}
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Nama Belakang"
                    name="last-name"
                    placeholder="cth. Tesalonika"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                  />
                </div>
                {/* @ts-ignore */}
                <Input
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Email"
                  name="email"
                  placeholder="cth. email@contoh.com"
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                />
                <Typography
                  variant="lead"
                  className="!text-blue-gray-500 text-sm mb-2"
                >
                  Apa yang Anda butuhkan?
                </Typography>
                <div className="-ml-3 mb-14 ">
                  {/* @ts-ignore */}
                  <input type="radio" name="type" id="design" className="mr-2" defaultChecked />
                  <label htmlFor="design" className="mr-6 text-sm text-gray-700">Design</label>
                  <input type="radio" name="type" id="development" className="mr-2" />
                  <label htmlFor="development" className="mr-6 text-sm text-gray-700">Development</label>
                  <input type="radio" name="type" id="konsultasi" className="mr-2" />
                  <label htmlFor="konsultasi" className="mr-6 text-sm text-gray-700">Konsultasi</label>
                  <input type="radio" name="type" id="lainnya" className="mr-2" />
                  <label htmlFor="lainnya" className="text-sm text-gray-700">Lainnya</label>
                </div>
                {/* @ts-ignore */}
                <Textarea
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Pesan Anda"
                  name="message"
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                />
                <div className="w-full flex justify-end">
                  <Button className="w-full md:w-fit" color="gray" size="md">
                    Kirim Pesan
                  </Button>
                </div>
              </form>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default ContactForm;
