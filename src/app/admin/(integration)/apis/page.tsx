import { SectionWithHeader } from "@/components/ui/sections/SimpleSection";
import MSServices from "./components/Services";
import { PageTitle } from "@/components/ui/elements/PageTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, GitBranch, Terminal, FileCode2 } from "lucide-react";

const ApisPage = () => {
  return (
    <div className="w-full space-y-8">
      <PageTitle>APIs Management</PageTitle>

      <SectionWithHeader title="APIs and Scripts">
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Central hub to access <strong>microservices API documentation</strong>,{" "}
          scripts references, and links to related repositories.
        </p>
      </SectionWithHeader>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition dark:bg-foreground-dark">
          <CardHeader>
            <BookOpen className="h-6 w-6 text-blue-500 mb-2" />
            <CardTitle>Swagger Docs</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-gray-600 dark:text-gray-300">
            Browse the interactive API documentation for all microservices.
            <div className="mt-4">
              <Button variant="outline" asChild>
                <a href="/api-docs" target="_blank">Open Swagger</a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition dark:bg-foreground-dark">
          <CardHeader>
            <GitBranch className="h-6 w-6 text-green-500 mb-2" />
            <CardTitle>Repositories</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-gray-600 dark:text-gray-300">
            Access the source code of APIs and services on GitHub.
            <div className="mt-4">
              <Button variant="outline" asChild>
                <a href="https://github.com/JamzMarks/TCC" target="_blank">Go to GitHub</a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition dark:bg-foreground-dark">
          <CardHeader>
            <Terminal className="h-6 w-6 text-purple-500 mb-2" />
            <CardTitle>Scripts</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-gray-600 dark:text-gray-300">
            Useful CLI and automation scripts for setup, migrations and monitoring.
            <ul className="list-disc pl-4 mt-2 space-y-1">
              <li><FileCode2 className="inline h-4 w-4 mr-1" /> Setup & Deploy</li>
              <li><FileCode2 className="inline h-4 w-4 mr-1" /> DB Migration</li>
              <li><FileCode2 className="inline h-4 w-4 mr-1" /> Monitoring</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <MSServices />
    </div>
  );
};

export default ApisPage;
