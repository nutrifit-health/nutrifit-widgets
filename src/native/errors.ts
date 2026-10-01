export class NutriFitApiError extends Error {
  constructor(public readonly status: number, public readonly retryAfter: string | null) {
    super(`NUTRIFIT_HTTP_${status}`);
    this.name = 'NutriFitApiError';
  }
}
