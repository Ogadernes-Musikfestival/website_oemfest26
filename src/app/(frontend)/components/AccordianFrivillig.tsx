import { Accordion } from "@base-ui/react/accordion";
import { getFrivilligData } from "../lib/getFrivilligData";

function PlusIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 12 12" fill="currentcolor" {...props}>
      <path d="M6.75 0H5.25V5.25H0V6.75L5.25 6.75V12H6.75V6.75L12 6.75V5.25H6.75V0Z" />
    </svg>
  );
}

const AccordianFrivillig = async () => {
  const frivilligData = await getFrivilligData();
  return (
    <Accordion.Root>
      <h1 className="heading mt-[5vh] mb-16 max-w-1/2 text-5xl lg:mt-[15vh]">
        Frivillig områder
      </h1>

      {frivilligData.map((item) => (
        <Accordion.Item
          key={item.id}
          className="border-light border-t border-b"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group hover:bg-light text-neonGreen hover:text-purple flex w-full justify-between pt-12 pb-10 pl-4 text-4xl">
              {item.title} ({item.dag})
              <PlusIcon className="mr-4 size-6 shrink-0 transition-all ease-out group-data-pane-open:scale-110 group-data-panel-open:rotate-45" />
            </Accordion.Trigger>
          </Accordion.Header>

          <Accordion.Panel className="max-w-2xl py-8 pl-4 text-2xl">
            <div className="mb-8 flex flex-col">
              {item.timer && (
                <p className="mb-2">
                  <span className="bg-neonGreen text-dark mr-2 px-2">Vagt</span>
                  {item.timer}
                </p>
              )}

              {item.checkin && (
                <p>
                  <span className="bg-neonGreen text-dark mr-2 px-2">
                    Mødetid
                  </span>
                  {item.checkin}
                </p>
              )}
            </div>

            {item.primæropgave && <p>{item.primæropgave}</p>}
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};

export default AccordianFrivillig;
