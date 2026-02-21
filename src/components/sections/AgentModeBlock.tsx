import Link from 'next/link';

export function AgentModeBlock() {
  return (
    <div className="pt-6 pb-5 md:pt-8 md:pb-6 px-6 flex items-end relative overflow-hidden min-h-[148px]">
      <div className="absolute top-[-150px] right-[-120px] w-[300px] h-[300px] pointer-events-none">
        <svg viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            d="M56.7227 2C72.3887 2.00003 85.4886 7.36907 95.873 18.124C106.619 28.4983 112 41.4093 112 56.7227C112 72.3894 106.63 85.4894 95.874 95.874C85.4799 106.268 72.379 111.445 56.7227 111.445C41.4218 111.445 28.3396 106.261 17.5957 95.9004L17.5703 95.875C7.17621 85.4809 2.00003 72.379 2 56.7227C2 41.421 7.1863 28.509 17.5703 18.125C28.3091 7.38625 41.399 2 56.7227 2ZM56.7227 36.5234C50.9624 36.5234 46.1069 38.5338 42.043 42.5977C38.3849 46.2558 36.5234 50.9092 36.5234 56.7227C36.5235 62.9059 38.3881 67.935 42.0439 71.9551C46.0846 75.6319 50.9394 77.4766 56.7227 77.4766C62.942 77.4765 67.7669 75.5924 71.4023 71.957C75.4424 67.9169 77.4765 62.8875 77.4766 56.7227C77.4766 50.9655 75.4711 46.3297 71.4648 42.6572L71.4014 42.5986L71.3428 42.5352C67.6942 38.5549 62.8876 36.5235 56.7227 36.5234Z"
            stroke="#FF5233"
            strokeWidth="2.5"
          />
        </svg>
      </div>

      <div className="relative flex flex-col gap-2">
        <p className="text-white text-[28px] font-normal leading-[1.1] tracking-tight">
          Feed vista<br />to your agent.
        </p>
        <Link
          href="/llms"
          className="text-white/40 text-sm font-mono leading-tight hover:text-white/70 transition-colors duration-200 w-fit"
        >
          [ENTER AGENT MODE] →
        </Link>
      </div>
    </div>
  );
}
