import React, {
  ChangeEvent,
  useEffect,
  useRef,
  useState,
  useMemo,
} from "react";

type OtpValidatorStatus = "idle" | "success" | "error";

const arrayOfLength = (
  length: number,
  defaultValue: object | undefined = undefined
) => {
  return Array.apply("", Array(length)).map((_) =>
    defaultValue ? Object.create(defaultValue) : ""
  );
};

export interface OtpValidatorProps {
  digits?: number;
  onFinish?: (code: string) => Promise<void>;
}
const OtpValidator: React.FC<OtpValidatorProps> = ({
  onFinish,
  digits = 6,
}) => {
  if (digits <= 0) {
    throw Error("OPT Validator: Digits should be greater than zero.");
  }
  const [status, setStatus] = useState<OtpValidatorStatus>("idle");
  const [renderDelay, setRenderDelay] = useState(300);
  const [loading, setLoading] = useState<boolean>(false);
  const [code, setCode] = useState<string[]>([]);
  const inputRefs = useRef<React.MutableRefObject<HTMLInputElement | null>[]>(
    arrayOfLength(digits, useRef(null))
  );

  useEffect(() => {
    if (renderDelay === 0) {
      return;
    }

    setTimeout(() => {
      setRenderDelay(0);
    }, renderDelay);
  }, [renderDelay]);

  useEffect(() => {
    setCode(arrayOfLength(digits));
  }, [digits]);

  useEffect(() => {
    if (renderDelay > 0) {
      return;
    }

    const ref = inputRefs.current[0];
    if (ref) {
      ref.current?.focus();
    }
  }, [renderDelay]);

  const handleCodeChange = async (val: string | undefined, idx: number) => {
    if (idx < 0 || idx >= code.length) {
      return;
    }

    const newCode = [...code];
    newCode[idx] = val?.charAt(val.length - 1) ?? "";
    setCode(newCode);

    if (idx + 1 < code.length && val?.length) {
      // Try to autofocus next input
      inputRefs.current[idx + 1].current?.focus();
    }
    if (idx === code.length - 1) {
      inputRefs.current[idx].current?.blur();
      if (onFinish) {
        setLoading(true);
        try {
          await onFinish(newCode.join(""));
          setCode(arrayOfLength(digits));
          setStatus("success");
        } catch (e: any) {
          setStatus("error");
        } finally {
          setLoading(false);
        }
      }
    }
  };

  const bgColor = useMemo(() => {
    if (status === "error") {
      return "bg-error-100";
    }
    if (status === "success") {
      return "bg-gray-200";
    }
    return "bg-gray-100";
  }, [status]);

  return (
    <div className="flex gap-12">
      {code.map((val: string, idx: number) => {
        return (
          <input
            ref={inputRefs.current[idx]}
            value={val}
            key={idx}
            className={`${idx} p-16 ${bgColor} w-72 rounded shadow text-center text-gray-900 text-xl font-bold m-0 appearance-none`}
            max={1}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleCodeChange(e.target.value, idx)
            }
            disabled={loading}
            type={"number"}
          />
        );
      })}
    </div>
  );
};

export default OtpValidator;
