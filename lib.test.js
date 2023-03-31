import { combineTo721, groupBy } from "./lib.js";

const owners = [
  {
    ownerAddress: "0x24941b659992908A74AE345551aD07F1D6E5Fd84",
    tokenBalances: [
      {
        tokenId:
          "0x0000000000000000000000000000000000000000000000000000000000000001",
        balance: 1,
      },
    ],
  },
  {
    ownerAddress: "0x680a48D0311d1363C6b97eD0dC97A78b65B35539",
    tokenBalances: [
      {
        tokenId:
          "0x0000000000000000000000000000000000000000000000000000000000000002",
        balance: 1,
      },
      {
        tokenId:
          "0x0000000000000000000000000000000000000000000000000000000000000003",
        balance: 1,
      },
    ],
  },
];
const result = [
  {
    contract: {
      address: "0x0bda9d7185a9885ecb1770d4793389be5da2e576",
    },
    id: {
      tokenId:
        "0x0000000000000000000000000000000000000000000000000000000000000001",
    },
    title: "IROIRO #1",
    metadata: {
      name: "IROIRO #1",
      attributes: [
        {
          value: "AKA",
          trait_type: "color",
        },
      ],
    },
  },
  {
    contract: {
      address: "0x0bda9d7185a9885ecb1770d4793389be5da2e576",
    },
    id: {
      tokenId:
        "0x0000000000000000000000000000000000000000000000000000000000000002",
    },
    title: "IROIRO #2",
    metadata: {
      name: "IROIRO #2",
      attributes: [
        {
          value: "AO",
          trait_type: "color",
        },
      ],
    },
  },
  {
    contract: {
      address: "0x0bda9d7185a9885ecb1770d4793389be5da2e576",
    },
    id: {
      tokenId:
        "0x0000000000000000000000000000000000000000000000000000000000000003",
    },
    title: "IROIRO #3",
    metadata: {
      name: "IROIRO #3",
      attributes: [
        {
          value: "SHIRO",
          trait_type: "color",
        },
      ],
    },
  },
  {
    contract: {
      address: "0x0bda9d7185a9885ecb1770d4793389be5da2e576",
    },
    id: {
      tokenId:
        "0x0000000000000000000000000000000000000000000000000000000000000004",
    },
    title: "IROIRO #4",
    metadata: {
      name: "IROIRO #4",
      attributes: [
        {
          value: "AKA",
          trait_type: "color",
        },
      ],
    },
  },
];

describe("lib", () => {
  test("combineTo721", async () => {
    const combined = await combineTo721(owners, result);
    const expected = [
      {
        contract: {
          address: "0x0bda9d7185a9885ecb1770d4793389be5da2e576",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000001",
        },
        title: "IROIRO #1",
        metadata: {
          name: "IROIRO #1",
          attributes: [
            {
              value: "AKA",
              trait_type: "color",
            },
          ],
        },
        owners: ["0x24941b659992908A74AE345551aD07F1D6E5Fd84"],
      },
      {
        contract: {
          address: "0x0bda9d7185a9885ecb1770d4793389be5da2e576",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000002",
        },
        title: "IROIRO #2",
        metadata: {
          name: "IROIRO #2",
          attributes: [
            {
              value: "AO",
              trait_type: "color",
            },
          ],
        },
        owners: ["0x680a48D0311d1363C6b97eD0dC97A78b65B35539"],
      },
      {
        contract: {
          address: "0x0bda9d7185a9885ecb1770d4793389be5da2e576",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000003",
        },
        title: "IROIRO #3",
        metadata: {
          name: "IROIRO #3",
          attributes: [
            {
              value: "SHIRO",
              trait_type: "color",
            },
          ],
        },
        owners: ["0x680a48D0311d1363C6b97eD0dC97A78b65B35539"],
      },
      {
        contract: {
          address: "0x0bda9d7185a9885ecb1770d4793389be5da2e576",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000004",
        },
        title: "IROIRO #4",
        metadata: {
          name: "IROIRO #4",
          attributes: [
            {
              value: "AKA",
              trait_type: "color",
            },
          ],
        },
        owners: [],
      },
    ];

    expect(combined).toEqual(expected);
  });

  test("groupBy", async () => {
    const combined = [
      {
        contract: {
          address: "0x0bda9d7185a9885ecb1770d4793389be5da2e576",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000001",
        },
        title: "IROIRO #1",
        metadata: {
          name: "IROIRO #1",
          attributes: [
            {
              value: "AKA",
              trait_type: "color",
            },
          ],
        },
        owners: ["0x24941b659992908A74AE345551aD07F1D6E5Fd84"],
      },
      {
        contract: {
          address: "0x0bda9d7185a9885ecb1770d4793389be5da2e576",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000002",
        },
        title: "IROIRO #2",
        metadata: {
          name: "IROIRO #2",
          attributes: [
            {
              value: "AO",
              trait_type: "color",
            },
          ],
        },
        owners: ["0x680a48D0311d1363C6b97eD0dC97A78b65B35539"],
      },
      {
        contract: {
          address: "0x0bda9d7185a9885ecb1770d4793389be5da2e576",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000003",
        },
        title: "IROIRO #3",
        metadata: {
          name: "IROIRO #3",
          attributes: [
            {
              value: "SHIRO",
              trait_type: "color",
            },
          ],
        },
        owners: ["0x680a48D0311d1363C6b97eD0dC97A78b65B35539"],
      },
      {
        contract: {
          address: "0x0bda9d7185a9885ecb1770d4793389be5da2e576",
        },
        id: {
          tokenId:
            "0x0000000000000000000000000000000000000000000000000000000000000004",
        },
        title: "IROIRO #4",
        metadata: {
          name: "IROIRO #4",
          attributes: [
            {
              value: "AKA",
              trait_type: "color",
            },
          ],
        },
        owners: [],
      },
    ];

    const grouped = await groupBy("color", combined);

    expect(grouped).toEqual({
      AKA: [
        {
          contract: {
            address: "0x0bda9d7185a9885ecb1770d4793389be5da2e576",
          },
          id: {
            tokenId:
              "0x0000000000000000000000000000000000000000000000000000000000000001",
          },
          title: "IROIRO #1",
          metadata: {
            name: "IROIRO #1",
            attributes: [
              {
                value: "AKA",
                trait_type: "color",
              },
            ],
          },
          owners: ["0x24941b659992908A74AE345551aD07F1D6E5Fd84"],
        },
        {
          contract: {
            address: "0x0bda9d7185a9885ecb1770d4793389be5da2e576",
          },
          id: {
            tokenId:
              "0x0000000000000000000000000000000000000000000000000000000000000004",
          },
          title: "IROIRO #4",
          metadata: {
            name: "IROIRO #4",
            attributes: [
              {
                value: "AKA",
                trait_type: "color",
              },
            ],
          },
          owners: [],
        },
      ],
      AO: [
        {
          contract: {
            address: "0x0bda9d7185a9885ecb1770d4793389be5da2e576",
          },
          id: {
            tokenId:
              "0x0000000000000000000000000000000000000000000000000000000000000002",
          },
          title: "IROIRO #2",
          metadata: {
            name: "IROIRO #2",
            attributes: [
              {
                value: "AO",
                trait_type: "color",
              },
            ],
          },
          owners: ["0x680a48D0311d1363C6b97eD0dC97A78b65B35539"],
        },
      ],
      SHIRO: [
        {
          contract: {
            address: "0x0bda9d7185a9885ecb1770d4793389be5da2e576",
          },
          id: {
            tokenId:
              "0x0000000000000000000000000000000000000000000000000000000000000003",
          },
          title: "IROIRO #3",
          metadata: {
            name: "IROIRO #3",
            attributes: [
              {
                value: "SHIRO",
                trait_type: "color",
              },
            ],
          },
          owners: ["0x680a48D0311d1363C6b97eD0dC97A78b65B35539"],
        },
      ],
    });
  });
});
