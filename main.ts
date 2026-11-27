// Entry for make.fun's "One-Line Office Jokes" bounty: one single line
// that makes office life funny, turning on a real detail of office life
// and landing the laugh in the last few words. Candidates:
//   1. "Our printer only jams when the document is due in five minutes
//      — it's not broken, it's middle management." Decent twist, but
//      the printer joke is the first office joke every entrant writes.
//   2. "The reply-all chain started with a birthday card and ended with
//      Legal; somewhere in between, Dave from IT declared himself 'out
//      of office, permanently.'" Funny, but it needs a whole story to
//      land and the punch arrives too early.
//   3. "HR said the new open-plan office would 'spark collaboration';
//      so far it has sparked three noise complaints and one very
//      committed silent treatment." Solid, yet the open-plan complaint
//      is a well-worn template.
//   4. "The meeting could have been an email, but the email would have
//      been a meeting, so we compromised and had a meeting about the
//      email." The most obvious office joke in existence — hundreds of
//      entrants will write some version of it.
// The line below wins: a concrete real detail (someone microwaving fish
// at 11:58, again), a collective office voice ("the whole floor has
// quietly agreed"), and the laugh lands in the last two words —
// "preferably downwind." Revised after running: the colon after
// "agreed" makes the floor's verdict land before the punch. Running
// the program prints that line, and nothing else.

/** One line that makes office life funny. */
function officeJoke(): string {
  return "Someone microwaved fish at 11:58 again, and the whole floor has quietly agreed: this is the hill we die on \u2014 preferably downwind.";
}

console.log(officeJoke());
