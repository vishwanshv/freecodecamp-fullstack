const shuffledFragments = [
  { id: 15, text: "and, after a time, passed the place where the Hare was sleeping." },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 11, text: "and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare," },
  { id: 7, text: "but for the fun of the thing he agreed." },
  { id: 19, text: "The Hare now ran his swiftest," },
  ,
  { id: 1, text: "A Hare was making fun of the Tortoise one day for being so slow." },
  { id: 14, text: "The Tortoise meanwhile kept going slowly but steadily," },
  { id: 9, text: "marked the distance and started the runners off." },
  ,
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 17, text: "and when at last he did wake up," },
  { id: 2, text: '"Do you ever get anywhere?" he asked with a mocking laugh.' },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 8, text: "So the Fox, who had consented to act as judge," },
  { id: 20, text: "but he could not overtake the Tortoise in time." },
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 6, text: "The Hare was much amused at the idea of running a race with the Tortoise," },
  ,
  { id: 13, text: "until the Tortoise should catch up." },
  { id: 10, text: "The Hare was soon far out of sight," },
  { id: 12, text: "he lay down beside the course to take a nap" },
  { id: 18, text: "the Tortoise was near the goal." },
];

function compactFragments(fragments) {
  const compacted = [];

  for (const fragment of fragments) {
    if (fragment !== undefined) {
      compacted.push(fragment);
    }
  }

  if (compacted.length !== fragments.length) {
    console.log(`[COMPACTED] Removed ${fragments.length - compacted.length} undefined fragments.`);
  }

  return compacted;
}

const compactedShuffledFragments = compactFragments(shuffledFragments);

function sortFragments(fragments) {
  const sorted = [];

  for (const fragment of fragments) {
    let inserted = false;

    for (let i = 0; i < sorted.length; i++) {
      if (fragment.id < sorted[i].id) {
        sorted.splice(i, 0, fragment);
        inserted = true;
        break;
      }
    }

    if (!inserted) {
      sorted.push(fragment);
    }
  }

  return sorted;
}

const sortedFragments = sortFragments(compactedShuffledFragments);

function dedupeFragments(fragments) {
  const deduped = [];
  let previousId = null;

  for (const fragment of fragments) {
    if (fragment.id !== previousId) {
      deduped.push(fragment);
      previousId = fragment.id;
    } else {
      console.log(`[DEDUPED] Removed duplicate fragment with id ${fragment.id}.`);
    }
  }

  return deduped;
}

const dedupedFragments = dedupeFragments(sortedFragments);

function fillMissingFragments(fragments) {
  const filled = [];

  if (fragments.length === 0) {
    return filled;
  }

  let expectedId = fragments[0].id;

  for (const fragment of fragments) {
    while (expectedId < fragment.id) {
      filled.push({ id: expectedId, text: "[...]" });
      console.log(`[FILLED] Added placeholder for missing id ${expectedId}.`);
      expectedId++;
    }

    filled.push(fragment);
    expectedId = fragment.id + 1;
  }

  return filled;
}

const filledFragments = fillMissingFragments(dedupedFragments);

function assembleStory(fragments) {
  const storyParts = [];

  for (const fragment of fragments) {
    storyParts.push(fragment.text);
  }

  return storyParts.join("\n");
}

console.log(assembleStory(filledFragments));

console.log(compactFragments([{ id: 1, text: "Hello" },,]))
console.log(compactFragments([{ id: 1, text: "Hello" }, { id: 2, text: "World" }]))
console.log(sortFragments([{ id: 30, text: "c" }, { id: 10, text: "a" }, { id: 10, text: "dup" }, { id: 20, text: "b" }]))
console.log(dedupeFragments([{ id: 1, text: "first" }, { id: 1, text: "dup" }, { id: 2, text: "second" }]))
console.log(dedupeFragments([{ id: 1, text: "a" }, { id: 1, text: "dup" }, { id: 2, text: "b" }, { id: 2, text: "dup" }, { id: 3, text: "c" }]))
console.log(fillMissingFragments([{ id: 1, text: "a" }, { id: 3, text: "c" }]))
console.log(assembleStory([{ id: 1, text: "Hello" }, { id: 2, text: "World" }]))
console.log(assembleStory(filledFragments))

/*
[COMPACTED] Removed 5 undefined fragments.
[DEDUPED] Removed duplicate fragment with id 5.
[DEDUPED] Removed duplicate fragment with id 12.
[DEDUPED] Removed duplicate fragment with id 12.
[FILLED] Added placeholder for missing id 3.
[FILLED] Added placeholder for missing id 4.
[FILLED] Added placeholder for missing id 16.
A Hare was making fun of the Tortoise one day for being so slow.
"Do you ever get anywhere?" he asked with a mocking laugh.
[...]
[...]
I'll run you a race and prove it."
The Hare was much amused at the idea of running a race with the Tortoise,
but for the fun of the thing he agreed.
So the Fox, who had consented to act as judge,
marked the distance and started the runners off.
The Hare was soon far out of sight,
and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare,
he lay down beside the course to take a nap
until the Tortoise should catch up.
The Tortoise meanwhile kept going slowly but steadily,
and, after a time, passed the place where the Hare was sleeping.
[...]
and when at last he did wake up,
the Tortoise was near the goal.
The Hare now ran his swiftest,
but he could not overtake the Tortoise in time.
[COMPACTED] Removed 1 undefined fragments.
[ { id: 1, text: 'Hello' } ]
[ { id: 1, text: 'Hello' }, { id: 2, text: 'World' } ]
[ { id: 10, text: 'a' },
  { id: 10, text: 'dup' },
  { id: 20, text: 'b' },
  { id: 30, text: 'c' } ]
[DEDUPED] Removed duplicate fragment with id 1.
[ { id: 1, text: 'first' }, { id: 2, text: 'second' } ]
[DEDUPED] Removed duplicate fragment with id 1.
[DEDUPED] Removed duplicate fragment with id 2.
[ { id: 1, text: 'a' },
  { id: 2, text: 'b' },
  { id: 3, text: 'c' } ]
[FILLED] Added placeholder for missing id 2.
[ { id: 1, text: 'a' },
  { id: 2, text: '[...]' },
  { id: 3, text: 'c' } ]
Hello
World
A Hare was making fun of the Tortoise one day for being so slow.
"Do you ever get anywhere?" he asked with a mocking laugh.
[...]
[...]
I'll run you a race and prove it."
The Hare was much amused at the idea of running a race with the Tortoise,
but for the fun of the thing he agreed.
So the Fox, who had consented to act as judge,
marked the distance and started the runners off.
The Hare was soon far out of sight,
and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare,
he lay down beside the course to take a nap
until the Tortoise should catch up.
The Tortoise meanwhile kept going slowly but steadily,
and, after a time, passed the place where the Hare was sleeping.
[...]
and when at last he did wake up,
the Tortoise was near the goal.
The Hare now ran his swiftest,
but he could not overtake the Tortoise in time.
*/