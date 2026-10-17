import React, { useState, useEffect } from 'react';
import { 
  Play, RotateCcw, CheckCircle2, Clock, Terminal, 
  GitBranch, Box, ShieldCheck, Cloud, Cpu, Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface PipelineStage {
  id: string;
  name: string;
  tool: string;
  icon: string;
  status: 'idle' | 'running' | 'success' | 'failed';
  logs: string[];
}

export const PipelineSimulator: React.FC = () => {
  const initialStages: PipelineStage[] = [
    {
      id: 'commit',
      name: 'Code Push & Webhook',
      tool: 'GitHub Actions',
      icon: 'GitBranch',
      status: 'idle',
      logs: [
        '[Webhook] Push detected on branch "main" by @mdriswan134',
        '[Git] Commit sha: a9e40f1 "feat: optimize AWS EC2 security groups and lambda order processor"',
        '[Trigger] Initializing Jenkins / GitHub Actions worker runner...'
      ]
    },
    {
      id: 'lint',
      name: 'Security & Lint Scan',
      tool: 'ShellCheck & Trivy',
      icon: 'ShieldCheck',
      status: 'idle',
      logs: [
        '[Lint] Executing bash scripts syntax validation with ShellCheck...',
        '[Sec] Scanning Dockerfile & dependencies with Trivy container scanner...',
        '[Pass] 0 Critical vulnerabilities found. Code hygiene verified.'
      ]
    },
    {
      id: 'build',
      name: 'Docker Build & Package',
      tool: 'Docker Engine',
      icon: 'Box',
      status: 'idle',
      logs: [
        '[Docker] Step 1/6 : FROM python:3.11-alpine AS runtime',
        '[Docker] Step 2/6 : WORKDIR /app && COPY requirements.txt .',
        '[Docker] Step 3/6 : RUN pip install --no-cache-dir -r requirements.txt',
        '[Docker] Step 4/6 : COPY . .',
        '[Docker] Step 5/6 : EXPOSE 5000',
        '[Docker] Successfully tagged app-service:v2.4.0 (Image size: 48MB)'
      ]
    },
    {
      id: 'iac',
      name: 'Terraform IaC Plan',
      tool: 'Terraform Cloud',
      icon: 'Cpu',
      status: 'idle',
      logs: [
        '[Terraform] Initializing backend with S3 bucket state lock...',
        '[Terraform] terraform plan -out=tfplan',
        '[Plan] ~ aws_security_group.app_sg (updated ingress rule)',
        '[Plan] + aws_lambda_function.order_processor (new version)',
        '[Success] Plan generated: 2 to add, 1 to modify, 0 to destroy.'
      ]
    },
    {
      id: 'deploy',
      name: 'AWS Deploy & Health Check',
      tool: 'AWS CloudWatch & EC2',
      icon: 'Cloud',
      status: 'idle',
      logs: [
        '[AWS] Deploying updated artifacts to Amazon EC2 and AWS Lambda...',
        '[HTTP] Curling http://ec2-instance.ap-south-1.compute.amazonaws.com/health',
        '[Response] 200 OK - Response time: 42ms',
        '[CloudWatch] All 4 alarm metrics green. Zero packet drops.',
        '🚀 PRODUCTION DEPLOYMENT COMPLETE & VERIFIED 100% HEALTHY'
      ]
    }
  ];

  const [stages, setStages] = useState<PipelineStage[]>(initialStages);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [activeConsoleIndex, setActiveConsoleIndex] = useState<number>(0);
  const [visibleLogs, setVisibleLogs] = useState<string[]>([]);

  const startPipeline = () => {
    if (isRunning) return;
    setIsRunning(true);
    setStages(initialStages);
    setVisibleLogs([]);

    let currentStageIndex = 0;

    const runStage = (index: number) => {
      if (index >= initialStages.length) {
        setIsRunning(false);
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
        return;
      }

      setActiveConsoleIndex(index);

      // Mark current stage as running
      setStages(prev => prev.map((s, i) => i === index ? { ...s, status: 'running' } : s));

      // Append logs one by one
      const stageLogs = initialStages[index].logs;
      stageLogs.forEach((log, logIdx) => {
        setTimeout(() => {
          setVisibleLogs(prev => [...prev, log]);
        }, logIdx * 350);
      });

      // Complete stage after all logs
      const duration = stageLogs.length * 350 + 600;
      setTimeout(() => {
        setStages(prev => prev.map((s, i) => i === index ? { ...s, status: 'success' } : s));
        currentStageIndex++;
        runStage(currentStageIndex);
      }, duration);
    };

    runStage(0);
  };

  const resetPipeline = () => {
    setIsRunning(false);
    setStages(initialStages);
    setVisibleLogs([]);
    setActiveConsoleIndex(0);
  };

  return (
    <section id="pipeline" className="py-24 bg-[#0B1120] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>INTERACTIVE DEVOPS LAB</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            Live CI/CD Pipeline <span className="text-gradient">Simulator</span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            Experience the automated continuous integration & infrastructure delivery workflow Mohamed architects for zero-downtime AWS deployments.
          </p>
        </div>

        {/* Pipeline Control Dashboard Card */}
        <div className="bg-[#111827] border border-gray-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
          
          {/* Top Control Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-800">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 live-pulse"></span>
                <h3 className="font-heading font-bold text-lg text-white">
                  Automated Cloud Release Pipeline (main branch)
                </h3>
              </div>
              <p className="text-xs text-gray-400 font-mono mt-0.5">
                Target: AWS EC2 / Lambda • Region: ap-south-1 (Mumbai) • Runner: Ubuntu Linux
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={resetPipeline}
                disabled={isRunning}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 disabled:opacity-40 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>

              <button
                onClick={startPipeline}
                disabled={isRunning}
                className="flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-glow-primary disabled:opacity-50 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                {isRunning ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Pipeline Running...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Trigger Pipeline Run</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Pipeline Visual Stages Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 py-6">
            {stages.map((stage, sIdx) => {
              const isSelected = activeConsoleIndex === sIdx;
              return (
                <div
                  key={stage.id}
                  onClick={() => setActiveConsoleIndex(sIdx)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer relative ${
                    stage.status === 'success'
                      ? 'bg-emerald-950/20 border-emerald-800/60'
                      : stage.status === 'running'
                      ? 'bg-blue-950/30 border-blue-500 shadow-glow-primary animate-pulse'
                      : 'bg-gray-900/60 border-gray-800 hover:border-gray-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-gray-400">
                      Stage 0{sIdx + 1}
                    </span>
                    {stage.status === 'success' && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    )}
                    {stage.status === 'running' && (
                      <div className="w-3.5 h-3.5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                    )}
                    {stage.status === 'idle' && (
                      <Clock className="w-3.5 h-3.5 text-gray-600" />
                    )}
                  </div>

                  <div className="font-heading font-bold text-xs text-white mb-1">
                    {stage.name}
                  </div>
                  <div className="text-[10px] font-mono text-sky-400">
                    {stage.tool}
                  </div>

                  {/* Stage status tag */}
                  <div className="mt-3 pt-2 border-t border-gray-800/60 flex items-center justify-between text-[10px] font-mono">
                    <span className="text-gray-500">Status:</span>
                    <span className={
                      stage.status === 'success' ? 'text-emerald-400 font-bold' :
                      stage.status === 'running' ? 'text-blue-400 font-bold' :
                      'text-gray-500'
                    }>
                      {stage.status.toUpperCase()}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Live Terminal Output Window */}
          <div className="bg-[#090E17] border border-gray-800 rounded-2xl overflow-hidden font-mono text-xs">
            
            <div className="bg-[#162033] px-4 py-2.5 flex items-center justify-between border-b border-gray-800">
              <div className="flex items-center gap-2 text-gray-300">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>Console Build Logs: {stages[activeConsoleIndex].name}</span>
              </div>
              <span className="text-[11px] text-gray-500">Stream: bash-session-tty0</span>
            </div>

            <div className="p-4 min-h-[180px] max-h-[260px] overflow-y-auto space-y-1.5 text-gray-300">
              {visibleLogs.length === 0 ? (
                <div className="text-gray-500 py-8 text-center italic">
                  Press "Trigger Pipeline Run" above to execute the automated CI/CD deployment pipeline.
                </div>
              ) : (
                visibleLogs.map((log, lIdx) => (
                  <div key={lIdx} className="flex items-start gap-2 animate-fadeIn">
                    <span className="text-gray-600 select-none text-[10px]">
                      {String(lIdx + 1).padStart(2, '0')}
                    </span>
                    <span className={
                      log.includes('COMPLETE') || log.includes('Pass') || log.includes('Success')
                        ? 'text-emerald-400 font-semibold'
                        : log.includes('Docker')
                        ? 'text-sky-300'
                        : log.includes('Terraform')
                        ? 'text-purple-300'
                        : 'text-gray-300'
                    }>
                      {log}
                    </span>
                  </div>
                ))
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
