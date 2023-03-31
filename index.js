import fs from "fs";
import {
  getNftsForCollection,
  getOwnerForCollection,
  format721,
} from "./lib.js";
import { intro, outro, text } from "@clack/prompts";

async function main() {
  intro("NFT Collection snapshot");

  const contractAddress = await text({
    message: "What is collection's contract address?",
    placeholder: "0x...",
    validate: (value) => {
      if (value.length === 0) return "ContractAddress is required";
      if (!value.startsWith("0x")) return "ContractAddress must start with 0x";
    },
  });

  try {
    const owners = await getOwnerForCollection(contractAddress);
    console.log(owners);
    // const result = await getNftsForCollection(contractAddress);

    // fs.writeFileSync(
    //   "./result.json",
    //   JSON.stringify(format(owners, result)),
    //   "utf8"
    // );

    // outro("done!\nSee: result.json");
  } catch (e) {
    console.error(e);
  }
}

main();
