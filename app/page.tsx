import { tools } from "@/data/tools";
import { ArrowRightIcon } from "lucide-react";
import Icon from "./components/icon";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl font-semibold mb-4 text-center">Tools</h1>
      <div className="border rounded-lg shadow-sm overflow-hidden w-full max-w-md dark:border-gray-800">
        <div className="flex flex-col divide-y divide-gray-200 dark:divide-gray-800">
          {tools.map((tool) => {
            return (
              <a
                key={tool.name}
                href={tool.url}
                className="flex flex-row items-center gap-4 px-4 py-3 group hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <div className="size-10 border border-gray-200 dark:border-gray-600 rounded-full bg-gray-100 dark:bg-gray-700 group-hover:border-gray-200 dark:group-hover:border-gray-600 flex items-center justify-center flex-shrink-0">
                  <Icon name={tool.icon} className="w-5 h-5 text-gray-500" />
                </div>
                <div className="w-full">
                  <h2 className="font-semibold">{tool.name}</h2>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {tool.description}
                  </div>
                </div>
                <div className="justify-self-end size-10 border border-gray-200 dark:border-gray-600 rounded-full group-hover:border-gray-200 dark:group-hover:border-gray-600 flex items-center justify-center flex-shrink-0">
                  <ArrowRightIcon
                    name={tool.icon}
                    className="w-5 h-5 text-gray-500"
                  />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
