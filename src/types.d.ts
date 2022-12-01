export {};

declare global {
  type Channel = {
    id: string;
    title: string;
    schedules: Schedule[];
    images: Images;
  };
  type Schedule = {
    title: string;
    start: string;
    end: string;
    id: string;
  };
  type Images ={ logo: string}
}
