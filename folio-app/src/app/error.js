"use client";
export default function Error({ error, reset }) {
  return (
    <html>
      <body>
        <div className=" flex justify-center mt-16">
          <div className=" bg-folio-slate w-fit rounded-2xl p-2 mb-4">
            <div className="flex flex-col items-center">
              <h2>Oh no! Something went wrong on that page!</h2>
              <p>{error.message}</p>
              <button onClick={() => reset()}>Try again?</button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
