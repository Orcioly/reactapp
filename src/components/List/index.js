import { useEffect, useState, useCallback, useMemo } from "react";

const set = new Set();

export default function List() {
  const [contador, setContador] = useState(1);

  const number = useMemo(() => 64554455 * 646546, []);

  const handleSetContador = useCallback(() => {
    setContador((oldContador) => oldContador + 1);
    set.add(handleSetContador);
  }, []);

  console.log(set.size);

  return (
    <div>
      Contador: {contador}
      <button onClick={handleSetContador}>Atualiza contador</button>
    </div>
  );
}
