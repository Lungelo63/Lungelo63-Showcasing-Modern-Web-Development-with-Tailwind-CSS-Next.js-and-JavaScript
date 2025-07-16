This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


<div className="w-full p-10">
        <div className="max-w-2xl mx-auto">
          <Card title="Ui components">
            <div className="grid grid-cols-4">
              <Button>Basic Button</Button>
              <Button>
                <AiOutlineHome/>
                Basic Button
                </Button>
                <Button isIcon>
                  <FaRegUser/>
                  </Button>
                  <Button link="https://www.google.com">Google</Button>
            </div>
            <Input type="text" placeholder="Full name"/>
            <Input type="text" placeholder="Full name" icon={<FaRegUser />} />
            <TextArea placeholder="Full name"  />
            <TextArea placeholder="Full name" icon={<FaRegUser />} />
            <Profile/>
            <MagneticWrapper className="w-[350px]">
              <FancyButton text="Contact me" icon={<FaArrowRight/>} />
            </MagneticWrapper>

            <MagneticWrapper className="">
              <ScrollDown/>
            </MagneticWrapper>
          </Card>
        </div>
      </div>
    )}
    </WaterWaveWrapper>
  );